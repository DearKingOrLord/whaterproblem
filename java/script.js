const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.getElementById('reportForm');
const result = document.getElementById('formResult');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('address').value.trim();
  const type = document.getElementById('type').value;
  result.textContent = `Спасибо, ${name}! Заявка «${type}» по адресу «${address}» принята в демо-систему EcoAryk.`;
  form.reset();
});
