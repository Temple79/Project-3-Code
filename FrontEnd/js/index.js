
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
    const header = document.querySelector("header")
    const bannerEdtion = document.createElement("div")
    const modeEdition = document.createElement("span")
    const editImage = document.createElement("img")

    editImage.src = "./assets/icons/Edit_icon.png"
    editImage.alt = "Edit icon"

    modeEdition.appendChild(editImage)

    modeEdition.textContent = "Mode édition"

    bannerEdtion.style.backgroundColor = "red"
    bannerEdtion.style.height = "50px"
    modeEdition.style.color = "white"
    modeEdition.style.fontSize = "10px"

    bannerEdtion.appendChild(modeEdition)
    header.before(bannerEdtion)
}

