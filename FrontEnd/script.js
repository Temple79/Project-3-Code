const api_url="http://localhost:5678/api-docs/";

async function getApi(url){
    const response=await fetch("http://localhost:5678/api-docs/");
    console.log(response);
    const data=await response.json();
    console.log(data);
}

getApi(api_url);