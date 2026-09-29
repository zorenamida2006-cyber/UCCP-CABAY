// =========================================
// CHURCH PHOTO GALLERY
// =========================================

// Each number represents an album.
// Add as many images as you want.

const galleries = [

  // Gallery 1 - VCS-2026
  [
    
    "vcs img/VCS1.jpg",
    "vcs img/VCS2.jpg",
    "vcs img/VCS3.jpg",
    "vcs img/VCS4.jpg",
    "vcs img/VCS5.jpg",
    "vcs img/VCS6.jpg",
    "vcs img/VCS7.jpg",
    "vcs img/VCS8.jpg",
    "vcs img/VCS9.jpg",
    "vcs img/VCS10.jpg",
    "vcs img/VCS11.jpg",
    "vcs img/VCS13.jpg",
    "vcs img/VCS14.jpg",
    "vcs img/VCS15.jpg",
    "vcs img/VCS16.jpg",
    "vcs img/VCS17.jpg",
    "vcs img/VCS18.jpg",
    "vcs img/VCS19.jpg",
    "vcs img/VCS20.jpg",
    "vcs img/VCS21.jpg",
    "vcs img/VCS22.jpg",
    "vcs img/VCS23.jpg",
    "vcs img/VCS24.jpg",
    "vcs img/VCS25.jpg",

  ],
  // Gallery 1 - youth activities
  [
  "youthactivity img/youth1.jpg",
  "youthactivity img/youth2.jpg",
  "youthactivity img/youth2.jpg",
  "youthactivity img/youth3.jpg",
  "youthactivity img/youth4.jpg",
  "youthactivity img/youth5.jpg",
  "youthactivity img/youth6.jpg",
  "youthactivity img/youth7.jpg",
  "youthactivity img/youth8.jpg",
  "youthactivity img/youth9.jpg",
  "youthactivity img/youth10.jpg",
  "youthactivity img/youth11.jpg",
  "youthactivity img/youth12.jpg",
  "youthactivity img/youth13.jpg",
  "youthactivity img/youth14.jpg",
  "youthactivity img/youth15.jpg",
  "youthactivity img/youth16.jpg",
  "youthactivity img/youth17.jpg",

  ],

  // Gallery 2 - visitiation
  [
    'visitation img/visitation1.jpg',
    'visitation img/visitation2.jpg',
    'visitation img/visitation3.jpg',
    'visitation img/visitation4.jpg',
    'visitation img/visitation5.jpg',
  ],

  // Gallery 3 - church anniversary
  [
  "anniversary img/curchanniversary1.jpg",
  "anniversary img/curchanniversary2.jpg",
  "anniversary img/curchanniversary3.jpg",
  "anniversary img/curchanniversary3.jpg",
  "anniversary img/curchanniversary5.jpg",
  "anniversary img/curchanniversary6.jpg",
  "anniversary img/curchanniversary7.jpg",
  "anniversary img/curchanniversary8.jpg",
  "anniversary img/curchanniversary9.jpg",
  "anniversary img/curchanniversary10.jpg",
  "anniversary img/curchanniversary11.jpg",
  "anniversary img/curchanniversary15.jpg",
  "anniversary img/curchanniversary13.jpg",
  "anniversary img/curchanniversary14.jpg",
  "anniversary img/curchanniversary15.jpg",
  ],
  [
    
  ]

  
];


let currentGallery = 0;
let currentPhoto = 0;


// Open Gallery

function openGallery(galleryNumber) {

  currentGallery = galleryNumber;
  currentPhoto = 0;

  document
    .getElementById("photoGallery")
    .classList.add("active");

  showPhoto();
}


// Show Photo

function showPhoto() {

  const photos = galleries[currentGallery];

  document.getElementById("galleryImage").src =
    photos[currentPhoto];

  document.getElementById("photoNumber").textContent =
    currentPhoto + 1;

  document.getElementById("photoTotal").textContent =
    photos.length;
}


// Next Photo

function nextPhoto() {

  const photos = galleries[currentGallery];

  currentPhoto++;

  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }

  showPhoto();
}


// Previous Photo

function previousPhoto() {

  const photos = galleries[currentGallery];

  currentPhoto--;

  if (currentPhoto < 0) {
    currentPhoto = photos.length - 1;
  }

  showPhoto();
}


// Close Gallery

function closeGallery() {

  document
    .getElementById("photoGallery")
    .classList.remove("active");
}


// Close when clicking outside the image

document
  .getElementById("photoGallery")
  .addEventListener("click", function(event) {

    if (event.target === this) {
      closeGallery();
    }

  });


// Keyboard Controls

document.addEventListener("keydown", function(event) {

  const gallery =
    document.getElementById("photoGallery");

  if (!gallery.classList.contains("active")) {
    return;
  }

  if (event.key === "ArrowRight") {
    nextPhoto();
  }

  if (event.key === "ArrowLeft") {
    previousPhoto();
  }

  if (event.key === "Escape") {
    closeGallery();
  }

});