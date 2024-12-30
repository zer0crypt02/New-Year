// Kar tanesi oluşturma
function createSnow() {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = Math.random() * 3 + 2 + 's';
    snow.style.opacity = Math.random();
    snow.style.width = snow.style.height = Math.random() * 5 + 5 + 'px';
    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), 5000);
}

setInterval(createSnow, 100);

// Havai fişek efekti
function createFirework(x, y) {
    const colors = ['#ff0', '#f0f', '#0ff', '#0f0', '#f00'];
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }
}

document.addEventListener('click', (e) => {
    createFirework(e.clientX, e.clientY);
});

// Geri sayım
function updateCountdown() {
    const newYear = new Date('2025-01-01T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = newYear - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();