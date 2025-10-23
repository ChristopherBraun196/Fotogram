
// Meine Bilder in klein
const container = document.getElementById ("holidaypicture");

//Meine Bilder 
const pictures = [ //Bilder NAMEN + GRÖßE muss noch angepasst werden
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


// Overlay-Elemente
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const closeBtn = document.getElementById("close-btn");

// 3. Eine Schleife, um jedes Bild einzufügen    KLEINE BILDER
for (let i = 0; i < pictures.length; i++) {
  const img = document.createElement("img");    // Richtiges <img>-Element erstellen
  img.src = pictures[i];                        // Pfad zum Bild setzen
  img.style.width = "250px";                    // Kleine Anzeigegröße
  img.style.margin = "10px";                    // Abstand zwischen Bildern
  img.style.cursor = "pointer";                 // Zeigt, dass man klicken kann


  // Wenn auf das Bild geklickt wird
  img.addEventListener("click", function() {
    overlayImg.src = this.src;       // zeig das gleiche Bild groß
    overlay.style.display = "flex";  // zeig das Overlay
  });

  container.appendChild(img);                   // In den Container einfügen
}

closeBtn.addEventListener("click", function() {
  overlay.style.display = "none";
});

// 4. Kontrollausgabe
console.log(pictures);