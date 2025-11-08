// Meine Bilder in klein
const container = document.getElementById("holidaypicture");
const dialog = document.getElementById("pictureDialog");
const bigImg = document.getElementById("bigImg");


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

//Eine Schleife, um jedes Bild einzufügen    KLEINE BILDER
for (let i = 0; i < pictures.length; i++) {
  const img = document.createElement("img"); // Richtiges <img>-Element erstellen
  img.src = pictures[i]; // Pfad zum Bild setzen
  img.alt = pictureDescription[i] || `Bild ${i + 1}`;
  img.classList.add("small-img"); // img css style

  // Wenn auf das Bild geklickt wird

  img.onclick = () => {
    bigImg.src = pictures[i];
    dialog.classList.add("bigImg"); // img css style
    dialog.showModal();
  };
  container.appendChild(img);

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
}

// Kontrollausgabe console.log(closeBtn);
