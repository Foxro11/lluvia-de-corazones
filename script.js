function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = "&#10084;"; // Código HTML del corazón
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '-50px'; // Posición inicial arriba de la pantalla
    heart.style.animationDuration = Math.random() * 6 + 5 + 's'; // Duración aleatoria de la animación
    document.getElementById('heart-rain').appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 15000); // Ajuste del tiempo de vida del corazón
}

setInterval(createHeart, 300); // Ajuste del intervalo de creación de los corazones
