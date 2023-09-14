

const modalGallery = document.querySelector(".modalGallery")
const figure = modalGallery.getElementsByTagName("figure")

const inputForm = document.querySelector(".inputForm")


initModal();


function initModal() {
    modal__close()
    addEvent_modal__close_overlay()
    addEvent_modal__close_cross()
    addEventForAjouter()
    addEventForBack()
    contentGallery__hide()
    contentForm__hide()
    addEventForbtnAddPhoto()
    addEventForbtnFormInputFile()
}


function modal__close() {
    const buttonValider = document.querySelector("#modalAjouter")
    buttonValider.textContent = "Ajouter une photo"
    const overlay = document.querySelector("#overlay");
    const modal = document.querySelector("#modal");

    modal.style.display = "none"
    overlay.style.display = "none"
}

function modal__show() {

    const modal = document.querySelector("#modal")
    const overlay = document.querySelector("#overlay")

    modal.style.display = "block"
    overlay.style.display = "block"

    modal__show_gallery()

    contentGallery__show()
    contentForm__hide()

}

function addEventForBtnModif() {
    const buttonModifier = document.querySelector(".js_modal")
    buttonModifier.addEventListener("click", modal__show)
}


function addEvent_modal__close_overlay() {
    const overlay = document.querySelector("#overlay")
    overlay.addEventListener("click", function (event) {
        modal__close();
    });
}
function addEvent_modal__close_cross() {
    const crossbutton = document.querySelector(".close")
    crossbutton.addEventListener("click", function (event) {
        modal__close();
    });
}

async function modal__show_gallery() {
    let modalData = await getApiData(api_url)
    gallery__render(modalData)
    const arr = Array.from(figure)
    addTrashIcon(arr)
    buttonBack__hide()
}

function gallery__render(data) {
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



function addTrashIcon(arr) {

    for (let i = 0; i < arr.length; i++) {
        const trashIcon = document.createElement("img")
        trashIcon.src = "./assets/icons/trash.png"
        trashIcon.className = "iconDelete"

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

function buttonBack__show() {
    const element = document.querySelector(".buttonBack")
    element.style.display = "block"
}
function buttonBack__hide() {
    const element = document.querySelector(".buttonBack")
    element.style.display = "none"
}
function contentGallery__show() {
    const element = document.querySelector("#divModalContentGallery")
    element.style.display = "block"
}
function contentGallery__hide() {
    const element = document.querySelector("#divModalContentGallery")
    element.style.display = "none"
}
function contentForm__show() {
    const element = document.querySelector("#divModalContentForm")
    element.style.display = "block"
}
function contentForm__hide() {
    const element = document.querySelector("#divModalContentForm")
    element.style.display = "none"
}


function addWorks() {
    contentGallery__hide()
    contentForm__show()
    buttonBack__show()
}


function addEventForbtnFormInputFile() {

    const element = document.querySelector("#form_input_file")
    element.addEventListener("change",(event)=> {
        const selectedFile = event.target.files[0]
        const previewImage = document.querySelector(".svgIcon")
        var reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
        }

        reader.readAsDataURL(selectedFile);

    } )
}
function addEventForbtnAddPhoto() {

    const element = document.querySelector("#form_input_file")
    element.addEventListener("click",()=> {
        const fileInput = document.querySelector("#form_input_file")
        fileInput.style.display='none';
    
    } )
}

function addEventForAjouter() {
    const buttonAjouter = document.querySelector("#modalAjouter")
    buttonAjouter.addEventListener("click",()=> {

        addWorks()
    } )
}



function addEventForBack() {
    const buttonBack = document.querySelector(".buttonBack")
    buttonBack.addEventListener("click", () => {
        inputForm.reset()
        modal__show()
        
    })
}

function addEventForForm () {

    inputForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        console.log("liuliak")
    })


}

function handleFormSubmit(e) {
    console.log("doba");
    const formData = new FormData(inputForm)
    
}