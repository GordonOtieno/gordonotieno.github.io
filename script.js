function toggleNav() {
  const navUl = document.getElementById('nav-link');
  const header = document.getElementById('head');
  const mainId = document.getElementById('main-logo');
  const navrev = document.getElementById('reversed');
  const closeHum = document.getElementById('close-hum');
  navUl.classList.toggle('show');
  mainId.classList.toggle('hide');
  navrev.classList.toggle('reversed');
  closeHum.classList.toggle('hide');
  header.classList.toggle('resize');
}
function reset() {
  const navUl = document.getElementById('nav-link');
  const header = document.getElementById('head');
  const mainId = document.getElementById('main-logo');
  const navrev = document.getElementById('reversed');
  const closeHum = document.getElementById('close-hum');
  navUl.classList.remove('show');
  mainId.classList.remove('hide');
  navrev.classList.remove('reversed');
  closeHum.classList.remove('hide');
  header.classList.remove('resize');
}
toggleNav();
reset();
