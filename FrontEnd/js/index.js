
const portfolio = document.querySelector("#portfolio")


// Initial Page Load
async function initialPageLoad() {
    const data = await getApiData(api_url)
    filter__create()
    gallery__show(data)
    checkIsAdmin()
}

function checkIsAdmin() {
    localStorage.getItem('token') ? iAmAnAdmin() : iAmNotAnAdmin()
}

function iAmAnAdmin() {
    const buttonLogin = document.querySelector("#buttonLogin")
    buttonLogin.textContent = "Logout"

    const divFilter = document.querySelector(".divFilters")
    divFilter.remove()

    createBannerEdition()

    addEventForBtnModif()

}
function iAmNotAnAdmin() {
  console.log("I am not an admin");
  
}

initialPageLoad()

function createBannerEdition() {
    const body = document.querySelector("body")
    const mesProjets = document.querySelector("#mesProjets")
    const bannerEdtion = document.createElement("div")
    const modeEdition = document.createElement("span")
    const editImage = document.createElement("img")
    const buttonModifier = document.createElement("a")
    const imageModifier = document.createElement("img")

    editImage.src = "./assets/icons/edit.svg"
    editImage.alt = "Edit icon"
    editImage.style.width = "20px"

    imageModifier.src = "./assets/icons/imageModifier.png"

    bannerEdtion.appendChild(editImage)

    mesProjets.appendChild(imageModifier)

    modeEdition.textContent = "Mode édition"

    buttonModifier.setAttribute('href', "#modal")
    buttonModifier.textContent = "modifier"
    buttonModifier.className = "js_modal"

    bannerEdtion.style.backgroundColor = "black"
    bannerEdtion.style.height = "50px"
    bannerEdtion.style.display = "flex"
    bannerEdtion.style.justifyContent = "center"
    bannerEdtion.style.alignItems = "center"
    modeEdition.style.color = "white"
    modeEdition.style.fontSize = "16px"
    modeEdition.style.fontFamily = "Work Sans"
    mesProjets.style.display = "flex"
    mesProjets.style.justifyContent = "center"
    mesProjets.style.alignItems = "center"
    mesProjets.style.gap = "10px"
    imageModifier.style.height = "15px"
    imageModifier.style.paddingLeft = "10px"
    buttonModifier.style.fontSize = "15px"
    buttonModifier.style.color = "black"
    buttonModifier.style.fontFamily = "Work Sans"
    buttonModifier.style.fontWeight = "lighter"


    bannerEdtion.appendChild(modeEdition)
    body.prepend(bannerEdtion)
    mesProjets.appendChild(buttonModifier)
}


function logOut() {
    const buttonLogin = document.querySelector("#buttonLogin")

    buttonLogin.addEventListener("click", (e) => {
        if (buttonLogin.textContent === "Logout") {
            e.preventDefault()
            localStorage.removeItem('token')
            window.location = "index.html"
        }
    })

}

logOut()