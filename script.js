let isNavbarExpanded = false;

function toggleNavbar() {
  const navbar = document.getElementById('navbar');
  
  if (isNavbarExpanded) {
    navbar.classList.remove('expanded');
  } else {
    navbar.classList.add('expanded');
  }
  
  isNavbarExpanded = !isNavbarExpanded;
}
