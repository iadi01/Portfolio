document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const header = document.querySelector('.nav');
const burger = document.querySelector('.hamburger');
burger?.addEventListener('click', () => header.classList.toggle('open'));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const form = e.target;
//   const data = new FormData(form);
//   const response = await fetch(form.action, {
//     method: form.method,
//     body: data
//   });

  // if (response.ok) {
  //   const res = await response.json();
  //   alert("✅ Message sent successfully!");
  //   form.reset();
  // } else {
  //   alert("❌ Something went wrong. Check console.");
  //   console.error(await response.text());
//   }
// );
