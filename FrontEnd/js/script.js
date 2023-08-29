const api_url="http://localhost:5678/api/works";
const gallery=document.querySelector(".gallery");

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


async function initialPageLoad(){
    const data=await getApiData(api_url)
    currentGallery(data)
}
initialPageLoad()