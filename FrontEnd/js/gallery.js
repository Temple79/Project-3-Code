
function gallery__show(data) {
    const gallery = document.querySelector(".gallery")
    gallery.innerHTML = ""

    for (let i = 0; i < data.length; i++) {
        const figure = document.createElement("figure")
        const image = document.createElement("img")
        const figcaption = document.createElement("figcaption")

        figcaption.textContent = data[i].title
        image.src = data[i].imageUrl
        image.alt = data[i].title
        image.id = data[i].id
        image.classList.add("imgGallery")

        figure.appendChild(image)
        figure.appendChild(figcaption)

        gallery.appendChild(figure)
    }
}


