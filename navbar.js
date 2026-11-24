(function () {
  var toggle = document.querySelector(".navbar-toggle");
  var navigation = document.querySelector(".navbar");

  if (!toggle || !navigation) {
    return;
  }

  function setExpanded(expanded) {
    toggle.setAttribute("aria-expanded", String(expanded));
    navigation.classList.toggle("is-open", expanded);
  }

  toggle.addEventListener("click", function () {
    setExpanded(toggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      setExpanded(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setExpanded(false);
      toggle.focus();
    }
  });
})();
