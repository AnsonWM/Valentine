// script.js
let flower = document.querySelector('.flower');
let petals = document.querySelectorAll('.petal');
let flowerCount = petals.length;  // Jumlah kelopak bunga

// Fungsi untuk menjatuhkan kelopak bunga satu per satu
function dropPetal() {
    if (flowerCount > 0) {
        let petal = petals[petals.length - flowerCount];  // Ambil kelopak bunga terakhir yang belum jatuh
        petal.style.animation = "fall 2s forwards";
        flowerCount--;  // Kurangi jumlah kelopak yang tersedia

        // Reset animasi kelopak setelah selesai
        setTimeout(() => {
            petal.style.animation = '';
        }, 2000);

        // Jika bunga habis (semua kelopak jatuh)
        if (flowerCount === 0) {
            setTimeout(() => {
                // Setelah semua kelopak jatuh, bunga akan direset dan bisa jatuh lagi
                flowerCount = petals.length;
                resetFlower();  // Reset bunga untuk bisa jatuh lagi
            }, 1000);
        }
    }
}

function resetFlower() {
    // Mengatur ulang posisi dan opacity kelopak bunga untuk memulai lagi
    petals.forEach(petal => {
        petal.style.opacity = "1";
        petal.style.transform = "translateY(0) scale(1)";
    });
}

flower.addEventListener('click', dropPetal);
