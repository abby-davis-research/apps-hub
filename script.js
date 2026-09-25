// Mobile nav toggle. Progressive enhancement only — the site works without JS.
(function () {
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (!toggle || !links) return;
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
