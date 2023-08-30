const api_url="http://localhost:5678/api/works";
const gallery=document.querySelector(".gallery");
const portfolio=document.querySelector("#portfolio")


async function getApiData(url){
    const response=await fetch(url);
    const data=await response.json();
    return data
}

function currentGallery(data){
    gallery.innerHTML=""

    for (let i=0; i<data.length; i++) {
        const figure=document.createElement("figure");
        const image=document.createElement("img");
        const figcaption=document.createElement("figcaption");

        figcaption.textContent=data[i].title;
        image.src=data[i].imageUrl;
        image.alt=data[i].title;

        figure.appendChild(image);
        figure.appendChild(figcaption);

        gallery.appendChild(figure);
    }
} 

function createFilterButtons(){
    const buttonsArray=["Tous","Objets","Appartements","Hôtels & Restaurants"]
    const divFilter=document.createElement("div")
    buttonsArray.forEach(element => {
        let button=document.createElement("button")
        button.textContent=element
        // button.classList.add("btn")
        // button.style.color="#1D6154"
        // button.style.borderRadius="60px"
        // button.style.borderColor="#1D6154"
        // button.style.height="37px"
        // button.style.fontStyle="bold"
        divFilter.appendChild(button)
    });
    divFilter.addEventListener("click", eventHandler)

    gallery.before(divFilter)

}

async function eventHandler (event) {
    if(event.target.tagName === "BUTTON") {
        const data = await getApiData(api_url)
        const currentButton=event.target
        if(currentButton.textContent === "Tous") {
            currentGallery(data)
            return
        }
        if(currentButton.textContent === "Objets") {
            const objetsData = data.filter((x)=> {
                return x.categoryId === 1;
            })
            currentGallery(objetsData)
            return
        }
        if(currentButton.textContent === "Appartements") {
            const appartementsData = data.filter((y)=> {
                return y.categoryId === 2;
            })
            currentGallery(appartementsData)
            return
        }            
        if(currentButton.textContent === "Hôtels & Restaurants") {
            const hotelsData = data.filter((z)=> {
                return z.categoryId === 3;
            })
            currentGallery(hotelsData)
            return
        }

    }
}

// Initial Page Load
async function initialPageLoad(){
    const data=await getApiData(api_url)
    createFilterButtons()
    currentGallery(data)
}


initialPageLoad()



