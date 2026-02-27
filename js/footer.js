/*************************************************************************
 * For loading the footer.
 * The footer will not work if you open the file directly rather than on a web server.
 *************************************************************************/

(function () {
  "use strict";

  $(function () {
    // Load footer.html only into the last .footer-container on the page
    $(".footer-container").last().load("footer.html");
  });
})();
