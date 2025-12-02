// function createGallery (){

//   let contentRef = document.getElementById("holidaypicture");
//   for (let index =0; index <pictures.length; index++){
//     contentRef.innerHTML += getNotesHtml();

//   }
// }
// contentRef.innerHTML += getNotesHtml(index);

// function getNotesHtml(index){
//   return` <div class=
// }

// Open display images to Dialog 
function openDialog(i) {
  currentIndex = i;
  renderImage(); // zeigt Bild + Text
  dialog.showModal();
  dialog.classList.add("opened");
  dialog.focus(); 
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
// Meine Bilder in klein
let container = document.getElementById("holidaypicture");
let dialog = document.getElementById("pictureDialog");
let bigImg = document.getElementById("bigImg");
// Renderig display images
for (let i = 0; i < pictures.length; i++) {
  let img = document.createElement("img");
  img.src = pictures[i]; // Pfad zum Bild
  img.alt = pictureDescription[i] || `img ${i + 1}`;
  img.classList.add("SmallImg"); // img css style
  img.loading = "lazy";
  img.tabIndex = 0; // <img tabindex="0">

  // Open display images

  img.addEventListener("click", () => openDialog(i));

  container.appendChild(img);
}

// Kontrollausgabe console.log(closeBtn);

// function createGallery() {
// let container = document.getElementById("holidaypicture");
// let template = document.getElementById ("imgTeamplate"). innerHTML.trim();
//   let html = "";

//   for (let i = 0; i< pictureDescription.length; i++) {
//     let alt = pictureDescription [i] || `img ${i + 1}`;
//   }

//   let imgHtml = template
//     .replace(/{{SRC}}/g, pictures [i])
//     .replace(/{{ALT}}/g, alt)
//     .replace(/{{INDEX}}/g, i);

//   html += imgHtml;
// }

// container.innerHTML = html;

// const template = document.getElementById("imgTemplate").innerHTML.trim();


// function renderSmallImg() {
//     dialogRef = document.getElementById("pictures");
//     for (let index = 0; index < pictures.length; index++) {
//         dialogRef.innerHTML += getNoteTemplate();
//     }
// }

// function getNoteTemplate() {
//     return ` 
        
//             <figure>
//               <img class="SmallImg" src="${pictures}" alt="">
//               <figcaption>
//                 ${pictureDescription}
//               </figcaption>
//             </figure>
//         ` }
