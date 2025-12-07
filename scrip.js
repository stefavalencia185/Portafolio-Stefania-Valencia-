// script.js - funcionalidad mínima para el formulario
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const submissionsEl = document.getElementById('submissions');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // datos
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // validación simple
    if (!name || !email || !message) {
      alert('Por favor completa todos los campos antes de enviar.');
      return;
    }

    // crear elemento que muestra el envío (simulación de envío)
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <strong>Mensaje enviado por:</strong> ${escapeHtml(name)} <br>
      <strong>Email:</strong> ${escapeHtml(email)} <p>${escapeHtml(message)}</p>
    `;
    submissionsEl.prepend(card);

    // reset y feedback
    form.reset();

    // breve notificación visual
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    card.animate([{ transform: 'translateY(-6px)', opacity: 0.95 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 400 });

    // en un proyecto real aquí enviarías los datos al servidor (fetch / axios)
    console.log('Simulación: formulario enviado', { name, email, message });
  });
});

// escape básico de texto para evitar inyección en el demo
function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

// --- MENÚ HAMBURGUESA ---
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  toggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});
