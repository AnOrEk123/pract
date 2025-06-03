const navPanel = document.getElementById('nav');
const menuButton = document.getElementById('menu');
const header = document.querySelector('header');
let active = false;

menuButton.addEventListener('click', () => {
    active = !active;

    if (active) {
        menuButton.style.transform = 'rotate(90deg)';
        navPanel.classList.add('active');
        setTimeout(() => {
            navPanel.classList.add('show');
        }, 10);
    } else {
        menuButton.style.transform = 'rotate(0deg)';
        navPanel.classList.remove('show');
        setTimeout(() => {
            if (!active) navPanel.classList.remove('active');
        }, 400);
    }
});

navPanel.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn')) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('activated');
        });
        e.target.classList.add('activated');
    }
});
