const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    sidebar.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        sidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));