(function () {
  "use strict";

  $(function () {
    $(".menu-container").load("menu.html", function () {
      // 🔥 IMPORTANT: run translation AFTER menu loads
      const lang = localStorage.getItem("language") || "en";
      if (typeof setLanguage === "function") {
        setLanguage(lang);
      }
    });
  });
})();