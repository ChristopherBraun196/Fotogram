// Meine Bilder in klein
let container = document.getElementById("holidaypicture");
let dialog = document.getElementById("pictureDialog");
let bigImg = document.getElementById("bigImg");

//Meine Bilder
let pictures = [
  //Bilder (NAMEN + GRÖßE muss noch angepasst werden)
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
  "./img/img6.jpg",
  "./img/img7.jpg",
  "./img/img8.jpg",
  "./img/img9.jpg",
  "./img/img10.jpg",
];

// Bildebeschreibung und Bildtext (alt & p)
let pictureDescription = [
  "Hotel Außenansicht",
  "Strand auf Mallorca",
  "Blick vom Hotelzimmer Morgens",
  "Blick vom Hotelzimmer Mittags",
  "Aquarium mit Meerfischen",
  "Strand auf Mallorca",
  "Schildkröten von Oben",
  "Hai im Aquarium",
  "Hai im Aquarium aus der Nähe",
  "Strand Spaziergang auf Mallorca",
];

//Index (global, onclick function)
let currentIndex = 0;

function createGallery() {
  let;
}

function renderImage() {
  bigImg.src = pictures[currentIndex];
  bigImg.alt = pictureDescription[currentIndex] || `img ${currentIndex + 1}`;
  document.getElementById("pictureDescription").innerHTML =
    pictureDescription[currentIndex] || "";
}

// onclick from HTML

function closeBtn() {
  let dialog = document.getElementById("pictureDialog");
  dialog.close();
  dialog.classList.remove("opened");
}

function nextBtn() {
  currentIndex = (currentIndex + 1) % pictures.length;
  renderImage();
}

function prevBtn() {
  currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
  renderImage();
}
// Open display images to Dialog 
function openDialogAt(i) {
  currentIndex = i;
  renderImage(); // zeigt Bild + Text
  dialog.showModal();
  dialog.classList.add("opened");
  dialog.focus(); 
}

function openImg(e) {
  if (e.target === dialog) {
    
  }
}

function closeImg(e) {
  // Close display images 
  if (e.target === dialog) {
    closeBtn();
  }
}

function switchKey(e) {
  if (!dialog.open) return;

  if (e.key === "ArrowRight") {
    e.preventDefault();
    nextBtn();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    prevBtn();
  } else if (e.key === "Escape") {
    e.preventDefault();
    closeBtn();
  }
}

// Renderig display images
for (let i = 0; i < pictures.length; i++) {
  let img = document.createElement("img");
  img.src = pictures[i]; // Pfad zum Bild
  img.alt = pictureDescription[i] || `img ${i + 1}`;
  img.classList.add("SmallImg"); // img css style
  img.loading = "lazy";
  img.tabIndex = 0; // <img tabindex="0">

  // Open display images

  img.addEventListener("click", () => openDialogAt(i));

  container.appendChild(img);
}

// Kontrollausgabe console.log(closeBtn);
