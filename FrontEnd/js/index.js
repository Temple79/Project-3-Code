
const portfolio = document.querySelector("#portfolio")








// Initial Page Load
async function initialPageLoad() {
    const data = await getApiData(api_url)
    filter__create()
    gallery__show(data)
    checkIsAdmin()
}

function checkIsAdmin()
{
    localStorage.getItem('token') ? iAmAnAdmin() : iAmNotAnAdmin()
}

function iAmAnAdmin() {
    const buttonLogin = document.querySelector("#buttonLogin")
    buttonLogin.textContent = "Logout"
    createBannerEdition()
}
function iAmNotAnAdmin() {
    alert ("je ne suis pas un admin")
}

initialPageLoad()

function createBannerEdition() {
    const body = document.querySelector("body")
    const bannerEdtion = document.createElement("div")
    const modeEdition = document.createElement("span")
    const editImage = document.createElement("img")

    editImage.src = "./assets/icons/edit.svg"
    editImage.alt = "Edit icon"
    editImage.style.width = "20px"

    bannerEdtion.appendChild(editImage)

    modeEdition.textContent = "Mode édition"

    bannerEdtion.style.backgroundColor = "black"
    bannerEdtion.style.height = "50px"
    bannerEdtion.style.display = "flex"
    bannerEdtion.style.justifyContent = "center"
    bannerEdtion.style.alignItems = "center"
    modeEdition.style.color = "white"
    modeEdition.style.fontSize = "16px"
    modeEdition.style.fontStyle = "Work Sans"


    bannerEdtion.appendChild(modeEdition)
    body.prepend(bannerEdtion)
}

