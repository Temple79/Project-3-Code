const api_url="http://localhost:5678/api/works";
let dataEl;
//"http://localhost:5678/api-docs/"
async function getApi(url){
    const response=await fetch(url);
    const data=await response.json();
    dataEl=data
    return dataEl
}

getApi()
console.log(dataEl)
const gallery=document.querySelector(".gallery")

function projects (){
for (let i=0; i<data.lenght; i++) {
    const figureEl=document.createElement("figure");
    const imageEl=document.createElement("img");
    const figcaptionEl=document.createElement("figcaption");
    figcaptionEl.innerText=data[i].title
    imageEl.src=data[i].imageUrl;
    imageEl.alt=data[i].title;
    figureEl.appendChild(imageEl);
    figureEl.appendChild(figcaptionEl);
    gallery.appendChild(figureEl);
}
}
