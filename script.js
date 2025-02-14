/* style.css */
body {
    background-color: #fff0f6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}

h1 {
    font-size: 36px;
    color: #ff4d88;
    margin-bottom: 20px;
}

.flower-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.flower {
    position: relative;
    width: 250px;  /* Memperbesar bunga */
    height: 250px; /* Memperbesar bunga */
    display: flex;
    justify-content: center;
    align-items: center;
}

.petal {
    position: absolute;
    width: 80px;  /* Memperbesar kelopak */
    height: 80px; /* Memperbesar kelopak */
    background-color: #ff4d88;
    border-radius: 50%;
    transform-origin: 50% 100%;
    opacity: 1;
}

.petal1 {
    top: 0;
    left: 85px;
    transform: rotate(0deg);
}

.petal2 {
    top: 70px;
    left: 0;
    transform: rotate(90deg);
}

.petal3 {
    top: 70px;
    left: 170px;
    transform: rotate(180deg);
}

.petal4 {
    top: 0;
    left: 85px;
    transform: rotate(270deg);
}

.petal5 {
    top: 140px; /* Kelopak tambahan di bawah bunga */
    left: 85px;
    transform: rotate(360deg);
}

.center {
    position: absolute;
    top: 70px;
    left: 70px;
    width: 80px;  /* Memperbesar tengah bunga */
    height: 80px; /* Memperbesar tengah bunga */
    background-color: #ffd700;
    border-radius: 50%;
}

.stem {
    width: 25px;  /* Memperbesar batang */
    height: 200px; /* Memperbesar batang */
    background-color: #228B22;
    position: absolute;
    bottom: 0; /* Batang menyatu dengan bunga */
    left: 97px;
}

.leaf {
    position: absolute;
    width: 100px;
    height: 50px;
    background-color: #32cd32;
    border-radius: 30px;
}

.left {
    top: 30px;
    left: -50px;
    transform: rotate(-45deg);
}

.right {
    top: 30px;
    right: -50px;
    transform: rotate(45deg);
}

/* Animasi untuk kelopak bunga gugur */
@keyframes fall {
    0% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translateY(200px) scale(0.8);
    }
}
