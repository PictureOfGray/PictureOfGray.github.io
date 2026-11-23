var coll = document.querySelectorAll(".collapsible:not(#toggle-all)");
var masterToggle = document.getElementById("toggle-all");

function getContent(button) {
  var content = button.nextElementSibling;
  return content && content.classList.contains("content") ? content : null;
}

function setDropdown(button, expanded) {
  var content = getContent(button);
  if (!content) {
    return;
  }

  button.classList.toggle("active", expanded);
  content.style.display = expanded ? "block" : "none";

  if (expanded) {
    button.textContent = button.textContent.replace(/^Show /, "Hide ");
  } else {
    button.textContent = button.textContent.replace(/^Hide /, "Show ");
  }
}

function updateMasterToggle() {
  if (!masterToggle || coll.length === 0) {
    return;
  }

  var expanded = Array.prototype.every.call(coll, function(button) {
    var content = getContent(button);
    return content && content.style.display === "block";
  });

  masterToggle.textContent = expanded ? "Collapse All" : "Show All";
  masterToggle.classList.toggle("active", expanded);
}

for (var i = 0; i < coll.length; i++) {
  setDropdown(coll[i], true);

  coll[i].addEventListener("click", function() {
    var content = getContent(this);
    if (content) {
      setDropdown(this, content.style.display !== "block");
      updateMasterToggle();
    }
  });
}

updateMasterToggle();

if (masterToggle) {
  masterToggle.addEventListener("click", function() {
    var allExpanded = Array.prototype.every.call(coll, function(button) {
      var content = getContent(button);
      return content && content.style.display === "block";
    });

    for (var i = 0; i < coll.length; i++) {
      setDropdown(coll[i], !allExpanded);
    }

    updateMasterToggle();
  });
}