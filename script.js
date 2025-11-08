
// Meine Bilder in klein
const container = document.getElementById ("holidaypicture");

//Meine Bilder 
let pictures = [ //Bilder NAMEN + GRÖßE muss noch angepasst werden
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

// Overlay-Elemente
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const Description = document.getElementById ("pictureDescription")
const closeBtn = document.getElementById("close-btn");
const prevBtn = document.getElementById("prev-btn"); // noch hinzufügen 
const nextBtn = document.getElementById("next-btn"); // noch hinzufügen


//Eine Schleife, um jedes Bild einzufügen    KLEINE BILDER
for (let i = 0; i < pictures.length; i++) {
  const img = document.createElement("img");    // Richtiges <img>-Element erstellen 
  img.src = pictures[i];                        // Pfad zum Bild setzen
  img.style.width = "250px";                    // Kleine Anzeigegröße
  img.style.margin = "10px";                    // Abstand zwischen Bildern
  img.style.cursor = "pointer";                 // Zeigt, dass man klicken kann
  img.style.borderRadius = "10px";
  


  // Wenn auf das Bild geklickt wird
  img.addEventListener("click", function() {
    overlayImg.src = this.src;       // zeig das gleiche Bild groß
    overlay.innerHTML += pictureDescription [i]; // Bild Beschreibung hinzufügen
    overlay.style.display = "flex";  // zeig das Overlay
  });

  container.appendChild(img);                   // In den Container einfügen
}

closeBtn.addEventListener("click", function() {
  overlay.style.display = "none";
  
});



// Kontrollausgabe console.log(closeBtn);