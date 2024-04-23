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

const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = carouselInner.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

let currentIndex = 0;
let intervalId;

// Function to show the current carousel item
function showItem(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Function to move to the next carousel item
function nextItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);
}

// Function to move to the previous carousel item
function prevItem() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentIndex);
}



// Stop the carousel
function stopCarousel() {
  clearInterval(intervalId);
}

// Event listeners for navigation controls
prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);



// Show the first item and start the carousel
showItem(currentIndex);
