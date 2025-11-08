// Meine Bilder in klein
const container = document.getElementById("holidaypicture");
const dialog = document.getElementById("pictureDialog");
const bigImg = document.getElementById("bigImg");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

//Meine Bilder
const pictures = [
  //Bilder NAMEN + GRÖßE muss noch angepasst werden
  "./img/IMG_5554.jpg",
  "./img/IMG_5555.jpg",
  "./img/IMG_5607.jpg",
  "./img/IMG_5663.jpg",
  "./img/IMG_5726.jpg",
  "./img/Strand1.jpg",
  "./img/IMG_5759.jpg",
  "./img/IMG_5765.jpg",
  "./img/IMG_5771.jpg",
  "./img/IMG_9154.jpg",
];

// Bildebeschreibung
const pictureDescription = [
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

// Dialogfenster öffnen
function openDialog(src, altText, description) {
  bigImg.src = src;
  bigImg.alt = altText;
  const descElem = document.getElementById("pictureDescription");
  descElem.innerHTML = description;
  dialog.showModal("bigImg");
  dialog.classList.add("opened");
}

// Dialogfenster schließen
function closeDialog() {
  dialog.close();
  dialog.classList.remove("opened");
}

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeDialog();
  }
});
document.getElementById("closeBtn").addEventListener("click", closeDialog);

// KLEINE BILDER
for (let i = 0; i < pictures.length; i++) {
  const img = document.createElement("img"); // Richtiges <img>-Element erstellen
  img.src = pictures[i]; // Pfad zum Bild
  img.alt = pictureDescription[i] || `Bild ${i + 1}`;
  img.classList.add("small-img"); // img css style
  img.loading = "lazy";

  // Bild öffnen
  img.addEventListener("click", () =>
    openDialog(pictures[i], pictureDescription[i], pictureDescription[i])
  );

  container.appendChild(img);
}

// Kontrollausgabe console.log(closeBtn);
