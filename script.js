// buat icon menu bar jika di pencet akan berubah

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

// membuat navbar ilang jika sudah di pencet
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

// buat efek tema malam

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

// Tambahkan ini di file script.js
document.querySelectorAll('.sertifikat .box img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

// Sertifikat popup functionality
document.querySelectorAll('.sertifikat .box-container .box img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

// Close popup when clicking outside the image
document.querySelector('.popup-image').onclick = (e) => {
    if(e.target.className == 'popup-image') {
        document.querySelector('.popup-image').style.display = 'none';
    }
}

// membuat scroll spy

// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector("header nav a[href*=' + id + ']").classList.add('active');
//             });
//         };
//     });
// };

document.querySelectorAll('.portfolio .box-container .box img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

// Ambil semua tombol filter
const filterButtons = document.querySelectorAll('.filter button');
// Ambil semua box galeri
const galleryItems = document.querySelectorAll('.box-container .box');

// Tampilkan semua item secara default
galleryItems.forEach(item => {
    item.style.display = 'block'; // Tampilkan semua item saat halaman dimuat
});

// Tambahkan event listener untuk setiap tombol filter
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hapus kelas 'active' dari semua tombol
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Tambahkan kelas 'active' ke tombol yang diklik
        button.classList.add('active');

        // Ambil nilai filter dari data-filter
        const filterValue = button.getAttribute('data-filter');

        // Tampilkan atau sembunyikan item galeri berdasarkan kategori
        galleryItems.forEach(item => {
            if (filterValue === 'all') {
                item.style.display = 'block'; // Tampilkan semua item
            } else {
                // Sembunyikan item yang tidak sesuai dengan kategori
                if (item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block'; // Tampilkan item yang sesuai
                } else {
                    item.style.display = 'none'; // Sembunyikan item yang tidak sesuai
                }
            }
        });
    });
});
