const formLogin = document.querySelector("#formLogin")
const incorrect = document.querySelector(".incorrect")

formLogin.addEventListener("submit", login)

async function login (event) {
    event.preventDefault()

    const formData = new FormData(formLogin)
    const email = formData.get("email") 
    const password = formData.get("password")

    console.log(email)
    console.log(password)
}