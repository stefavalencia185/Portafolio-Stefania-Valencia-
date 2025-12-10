// script.js - formulario + menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
  /* Formulario*/
  const form = document.getElementById('contactForm');
  const submissionsEl = document.getElementById('submissions');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // datos
      const name = form.name.value?.trim();
      const email = form.email.value?.trim();
      const message = form.message.value?.trim();

      // validación 
      if (!name || !email || !message) {
        alert('Por favor completa todos los campos antes de enviar.');
        return;
      }

      // crear elemento que muestra el envío 
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <strong>Mensaje enviado por:</strong> ${escapeHtml(name)} <br>
        <strong>Email:</strong> ${escapeHtml(email)}
        <p>${escapeHtml(message)}</p>
      `;
      submissionsEl.prepend(card);

      // reset y feedback
      form.reset();

      // breve notificación 
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (card.animate) {
        card.animate(
          [{ transform: 'translateY(-8px)', opacity: 0.95 }, { transform: 'translateY(0)', opacity: 1 }],
          { duration: 400 }
        );
      }

      console.log('Simulación: formulario enviado', { name, email, message });
    });
  }

  /*  Menú hamburguesa */
  const toggle = document.querySelector('.menu-toggle');
  const navList = document.getElementById('main-menu');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // cerrar menú al hacer clic en un enlace (útil en móvil)
    navList.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && navList.classList.contains('active')) {
        navList.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

// escape básico de texto para evitar inyección en el demo
function escapeHtml(text = '') {
  return String(text).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
