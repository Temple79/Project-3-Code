
const gallery = document.querySelector(".gallery")
const cloneGallery = gallery.cloneNode(true)

closeModal();

//showModal();
 function closeModal() {

    const overlay=document.querySelector("#overlay");
    const modal=document.querySelector("#modal");

     modal.style.display = "none"
     overlay.style.display = "none"
 }
 function showModal() {

    const modal=document.querySelector("#modal");
    const overlay=document.querySelector("#overlay");

    modal.style.display = "block"
    overlay.style.display = "block"

    addGalleryForModal()
     
 }

 function addEventForBtnModif() {
    const buttonModifier = document.querySelector(".js_modal")
    buttonModifier.addEventListener("click", showModal)
 }

 function addEventForBtnClose() {
   const buttonClose = document.querySelector(".close")
   buttonClose.addEventListener("click", closeModal)
 }

 function addGalleryForModal() {
   const modalGallery = document.querySelector(".modalGallery")
   modalGallery.appendChild(cloneGallery)
 }

 addEventForBtnClose()
