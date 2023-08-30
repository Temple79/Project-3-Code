const formLogin = document.querySelector("#formLogin")
const incorrect = document.querySelector(".incorrect")
const urlLogin = 'http://localhost:5678/api/users/login'

formLogin.addEventListener("submit", ajoutForm)

async function ajoutForm (event) {
    event.preventDefault()

    const formData = new FormData(formLogin)
    const email = formData.get("email") 
    const password = formData.get("password")

    console.log(email,password)

    login(email, password)
}

async function login (email, password) {
    const user = {email: 'email', password: 'password'}
    let response = await fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    let result = await response.json()
    console.log(result)
}
