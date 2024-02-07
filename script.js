

let sliderImages = document.querySelectorAll('.slide');
let current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Initialize slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

// Slide right
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// Slide left 
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// Start sliding
// startSlide();

// Dynamic sliding images

const firstImageSources = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg",
  "images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg"];

const secondImageSources = ["images/img01.jpg", "images/img02.jpg", "images/img03.jpg", "images/img04.jpg", "images/img05.jpg",
  "images/img01.jpg", "images/img02.jpg", "images/img03.jpg", "images/img04.jpg", "images/img05.jpg"];

// Array of image sources for the first container
const imageSources = ["images/img001.jpg", "images/img002.jpg", "images/img003.jpg", "images/img004.jpg", "images/img005.jpg",
  "images/img001.jpg", "images/img002.jpg", "images/img003.jpg", "images/img004.jpg", "images/img005.jpg"];

// Function to dynamically generate image elements
function generateImages(containerId, sources) {
  const container = document.getElementById(containerId);

  sources.forEach((src, index) => {
    const tag = document.createElement("div");
    tag.className = "tag";
    tag.innerHTML = `<img class="gallery-img" src="${src}" onclick="openModal('${src}')">`;
    container.appendChild(tag);
  });
}

// Call the function for the second container
generateImages("firstImageContainer", firstImageSources);

// Call the function for the second container
generateImages("secondImageContainer", secondImageSources);

// Call the function for the first container
generateImages("imageContainer", imageSources);

function openModal(imageSrc) {
  var modal = document.getElementById("demo-modal");
  var modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById("demo-modal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("demo-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // Your existing JavaScript code remains the same

  // Additional logic for automatic image change
  const homeImage = document.getElementById("homeImage");
  const imageSources = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg", 
  "images/img01.jpg", "images/img02.jpg", "images/img03.jpg", "images/img04.jpg", "images/img05.jpg",
  "images/img001.jpg", "images/img002.jpg", "images/img003.jpg", "images/img004.jpg", "images/img005.jpg"];
  let currentImageIndex = 0;

  function changeHomeImage() {
    homeImage.src = imageSources[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
  }

  setInterval(changeHomeImage, 2000); // Change image every 5 seconds
});


