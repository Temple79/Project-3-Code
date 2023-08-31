
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
    alert ("je suis un admin");
}
function iAmNotAnAdmin() {
    alert ("je ne suis pas un admin");
}

initialPageLoad()



