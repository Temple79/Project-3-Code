// const openModal = function(e) {
//     e.preventDefault()
//     const target = document.querySelector(e.target.getAttribute('href'))
//     target.style.display = "none"
// }

// document.querySelectorAll(".js_modal").forEach(a => {
//     a.addEventListener('click', openModal)
// })




// const modal = document.getElementById("modal")
// const buttonModifier = document.querySelector(".js_modal")
// console.log(buttonModifier)

// function openModal() {
//     modal.style.display = "none"
// }
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
 }

 function addEventForBtnModif() {
    const buttonModifier = document.querySelector(".js_modal")
    buttonModifier.addEventListener("click", showModal)
 }