

function filter__create() {
    const gallery = document.querySelector(".gallery");
    const buttonsArray = ["Tous", "Objets", "Appartements", "Hôtels & Restaurants"]
    const divFilter = document.createElement("div")
    divFilter.className += "divFilters"
    buttonsArray.forEach(element => {
        let button = document.createElement("button")
        button.textContent = element
        button.classList.add("btn")
        divFilter.style.display = "flex"
        divFilter.style.justifyContent = "center"
        divFilter.style.alignItems = "center"
        divFilter.style.paddingBottom = "30px"
        divFilter.style.gap = "10px"
        button.style.color = "#1D6154"
        button.style.backgroundColor = "inherit"
        button.style.borderRadius = "60px"
        button.style.borderColor = "#1D6154"
        button.style.height = "37px"
        button.style.fontWeight = "bolder"
        button.style.borderWidth = "1px"
        button.style.alignItems = "center"
        button.style.padding = "10px"

        divFilter.appendChild(button)
    });

    divFilter.addEventListener("click", (e) =>{
        filter__eventHandler(e)   
        const selectedFilter = e.target
        let children = e.target.parentNode.children

        for (let i=0; i<children.length; i++) {
            children[i].style.backgroundColor = "white"
        }

        if (selectedFilter.tagName === "BUTTON") {
        selectedFilter.style.backgroundColor = "green"
        }
    })
    gallery.before(divFilter)
}


async function filter__eventHandler(event) {
    if (event.target.tagName === "BUTTON") {
        let datas = await getApiData(api_url)
        const currentButton = event.target

        switch (currentButton.textContent) {
            case 'Objets':
                datas = filter__apply(datas, 1);
                break;
            case 'Appartements':
                datas = filter__apply(datas, 2);
                break;
            case 'Hôtels & Restaurants':
                datas = filter__apply(datas, 3);
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

