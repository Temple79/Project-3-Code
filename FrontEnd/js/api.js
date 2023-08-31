

const api_url = "http://localhost:5678/api/works";

async function getApiData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
}