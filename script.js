var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onClick = function () {
  // reduce the width of the sidebar on icon click
  sidebar.classList.toggle("small-sidebar");
  container.classList.toString("large-container");
};
