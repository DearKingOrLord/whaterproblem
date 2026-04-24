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


const openDonate = document.getElementById("openDonate");
const closeDonate = document.getElementById("closeDonate");
const donateModal = document.getElementById("donateModal");
const donateForm = document.getElementById("donateForm");
const donateResult = document.getElementById("donateResult");
const cardNumber = document.getElementById("cardNumber");

if (openDonate && closeDonate && donateModal) {
  openDonate.addEventListener("click", () => {
    donateModal.classList.add("active");
  });

  closeDonate.addEventListener("click", () => {
    donateModal.classList.remove("active");
  });

  donateModal.addEventListener("click", (event) => {
    if (event.target === donateModal) {
      donateModal.classList.remove("active");
    }
  });
}

if (cardNumber) {
  cardNumber.addEventListener("input", () => {
    let value = cardNumber.value.replace(/\D/g, "");
    value = value.substring(0, 16);
    value = value.replace(/(.{4})/g, "$1 ").trim();
    cardNumber.value = value;
  });
}

if (donateForm) {
  donateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = document.getElementById("donateAmount").value;
    const card = document.getElementById("cardNumber").value;

    if (card.replace(/\s/g, "").length < 16) {
      donateResult.textContent = "Введите 16 цифр номера карты.";
      donateResult.style.color = "#dc2626";
      return;
    }

    donateResult.style.color = "#0f766e";
    donateResult.textContent = `Спасибо! Ваша заявка на пожертвование ${amount} сом принята.`;

    donateForm.reset();
  });
}