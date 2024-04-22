function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDropdown(event) {
  var dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show');
}

function downloadPDF(language) {
  var pdfFile;
  switch (language) {
    case 'english':
      pdfFile = './assets/Caleb_mundati_C026-01-0669-2020_CV_English.pdf';
      break;
    case 'kiswahili':
      pdfFile = './assets/Caleb_mundati_CV_C026-01-0669-2020_kiswahili.pdf';
      break;
    case 'kikuyu':
      pdfFile = './assets/Caleb_mundati_C026-01-0669-2020_CV_kikuyu.pdf';
      break;
    default:
      return;
  }
  window.open(pdfFile);
}