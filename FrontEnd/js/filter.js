

function filter__create() {
    const gallery = document.querySelector(".gallery");
    const buttonsArray = ["Tous", "Objets", "Appartements", "Hôtels & Restaurants"]
    const divFilter = document.createElement("div")
    buttonsArray.forEach(element => {
        let button = document.createElement("button")
        button.textContent = element
        // button.classList.add("btn")
        // button.style.color="#1D6154"
        // button.style.borderRadius="60px"
        // button.style.borderColor="#1D6154"
        // button.style.height="37px"
        // button.style.fontStyle="bold"
        divFilter.appendChild(button)
    });
    divFilter.addEventListener("click", filter__eventHandler)

    gallery.before(divFilter)

}

async function filter__eventHandler(event) {
    if (event.target.tagName === "BUTTON") {
        let datas = await getApiData(api_url)
        const currentButton = event.target

        switch (currentButton.textContent) {
            case 'Objets':
                datas = filter__apply(datas,1);
                break;
            case 'Appartements':
                datas = filter__apply(datas,2);
                break;
            case 'Hôtels & Restaurants':
                datas = filter__apply(datas,3);
                break;
        }
        gallery__show(datas)

    }
}
function filter__apply(datas, filter) {
   return datas.filter((x) => {
        return x.categoryId === filter;
    })
}