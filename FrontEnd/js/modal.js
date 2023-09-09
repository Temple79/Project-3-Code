

const gallery = document.querySelector(".gallery")
const cloneGallery = gallery.cloneNode(true)
const figure = cloneGallery.getElementsByTagName("figure")


closeModal();


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
   const arr = Array.from(figure)
   addTrashIcon(arr)

 }

 addEventForBtnClose()

 function addTrashIcon(arr) {

   for (let i = 0; i < arr.length; i++) {
      const trashIcon = document.createElement("img")
      trashIcon.src = "./assets/icons/trash.png"
      trashIcon.className="iconDelete"

      arr[i].appendChild(trashIcon)

      trashIcon.addEventListener("click", async (e) => {
         e.preventDefault();
         e.stopPropagation();
         let image = e.target.parentNode.firstElementChild
         console.log(image)
         console.log(image.id)
         let articleID = image.id
         let monToken = localStorage.getItem("token");
         let response = await fetch(
           `http://localhost:5678/api/works/${articleID}`,
           {
             method: "DELETE",
             headers: {
               accept: "*/*",
               Authorization: `Bearer ${monToken}`,
             },
           }
         );
         console.log(response)
         if (response.ok) {
           return false;
         } else {
           alert("Echec de suppression");
         }
       })
 }
 }
