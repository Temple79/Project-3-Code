

const modalGallery = document.querySelector(".modalGallery")
const figure = modalGallery.getElementsByTagName("figure")
const divInputForm = document.getElementById("divInputForm")



closeModal();


 function closeModal() {
    const buttonValider = document.querySelector("#modalAjouter")
    buttonValider.textContent = "Ajouter une photo"
    const overlay=document.querySelector("#overlay");
    const modal=document.querySelector("#modal");

     modal.style.display = "none"
     overlay.style.display = "none"
 }

 function showModal() {

    const modal=document.querySelector("#modal")
    const overlay=document.querySelector("#overlay")

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

   async function addGalleryForModal() {
   let modalData = await getApiData(api_url)
   modal__show(modalData) 
   const arr = Array.from(figure)
   addTrashIcon(arr)
 }

 function modal__show(data) {
  const gallery = document.querySelector(".modalGallery")
  gallery.innerHTML = ""

  for (let i = 0; i < data.length; i++) {
      const figure = document.createElement("figure")
      const image = document.createElement("img")
      const figcaption = document.createElement("figcaption")

      image.src = data[i].imageUrl
      image.alt = data[i].title
      image.setAttribute("data-id", data[i].id)
      image.classList.add("imgModalGallery")
      
      figure.appendChild(image)
      figure.appendChild(figcaption)

      gallery.appendChild(figure)
  }
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
         let articleID = image.dataset.id         
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

function addWorks () {
   const buttonClose = document.querySelector (".close")

   const buttonBack = document.createElement ("img")
   buttonBack.src = "./assets/icons/Back-Button-PNG-Pic.png"
   buttonBack.className = "buttonBack"
   buttonClose.before(buttonBack)


   const addWorksHeader = document.querySelector("#modalHeader")
   addWorksHeader.textContent = "Ajout Photo"

   const addWorksGallery = document.querySelector(".modalGallery")
   addWorksGallery.innerHTML = ""
   addWorksGallery.style.display = "flex"
   addWorksGallery.style.flexDirection = "column"
   addWorksGallery.style.alignItems = "center"

   const svgIcon = document.createElement ("img")
   svgIcon.src = "./assets/icons/image-icon.png"
   svgIcon.className = "svgIcon"
   addWorksGallery.appendChild(svgIcon)

   const buttonAddPhoto = document.createElement("button")
   buttonAddPhoto.innerText = "+ Ajouter photo"
   buttonAddPhoto.className = "btnAddPhoto"
   addWorksGallery.appendChild(buttonAddPhoto)
   
   const imageInfo = document.createElement("p")
   imageInfo.className = "imageInfo"
   imageInfo.innerText = "jpg.png : 4go max"
   addWorksGallery.appendChild(imageInfo)

   modalGallery.appendChild(divInputForm)
   divInputForm.style.display = "block"

   const buttonValider = document.querySelector("#modalAjouter")
   buttonValider.textContent = "Valider"

}

function buttonAjouterValider(){ 
  let buttonText = document.querySelector("#modalAjouter").textContent
  if (buttonText === "Ajouter une photo"){
    addWorks()
  }
  else if (buttonText === "Valider"){
    console.log("dobata sucks");   
  }
}

function addEventForAjouter() {
   const buttonAjouter = document.querySelector("#modalAjouter")
   buttonAjouter.addEventListener("click", buttonAjouterValider)
}
// TODO addEventForBack
// function addEventForBack () {
//    const buttonBack = document.querySelector(".buttonBack")
//    buttonBack.addEventListener("click", showModal)
//    const buttonValider = document.querySelector("#modalAjouter")
//    buttonValider.textContent = "Ajouter une photo"
// }

addEventForAjouter()

