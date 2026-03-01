const translations = {
  en: {
    logo: "Lauren Gonzalez-Perez",
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navCommunity: "Community & Info",
    navLegal: "Simplified Legal Frameworks",
    navResources: "Community Resource Hub",
    navMosaic: "Project Mosaic",
    navResume: "Resume",
    navContact: "Contact",
    navGithub: "GitHub",
    footerText: "© 2026 Lauren Gonzalez-Perez • Built with purpose and impact"
  },
  es: {
    logo: "Lauren Gonzalez-Perez",
    navHome: "Inicio",
    navAbout: "Acerca de",
    navProjects: "Proyectos",
    navCommunity: "Comunidad & Información",
    navLegal: "Marcos legales simplificados",
    navResources: "Centro de recursos comunitarios",
    navMosaic: "Proyecto Mosaic",
    navResume: "Currículum",
    navContact: "Contacto",
    navGithub: "GitHub",
    footerText: "© 2026 Lauren Gonzalez-Perez • Construido con propósito e impacto"
  }
};

function setLanguage(lang) {
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

// Apply saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("language") || "en";
  setLanguage(lang);
});
