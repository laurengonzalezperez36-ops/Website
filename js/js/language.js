// ===== Language Dictionary =====
const translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    community: "Community & Information",
    resume: "Resume",
    contact: "Contact",
    heroTitle: "This is my personal website all about me",
    footerText: "© 2026 Lauren Gonzalez-Perez • Built with purpose and impact"
  },

  es: {
    home: "Inicio",
    about: "Acerca de",
    projects: "Proyectos",
    community: "Comunidad e Información",
    resume: "Currículum",
    contact: "Contacto",
    heroTitle: "Este es mi sitio web personal sobre mí",
    footerText: "© 2026 Lauren Gonzalez-Perez • Construido con propósito e impacto"
  }
};

// ===== Apply translations =====
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// ===== Language Switcher =====
function setLanguage(lang) {
  localStorage.setItem("language", lang);

  // small delay fixes menu/footer loading timing
  setTimeout(() => applyTranslations(lang), 100);
}

// ===== Load saved language =====
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";

  // run once immediately
  applyTranslations(savedLang);

  // run again after dynamic content loads
  setTimeout(() => applyTranslations(savedLang), 300);
});


