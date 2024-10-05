const genBtn = document.querySelector(".next");

const quote = document.querySelector('.quote');
const author = document.querySelector(".author");


const apiKey = "IGZ4SaYnSJ9/AXmaJmTbvg==bD8PoUwllgvyflxK"
const category = "happiness"
const options = {
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': apiKey},
    contentType: 'application/json'
}

const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=happiness"


async function getQuote(){
    const response = await fetch(apiUrl,options);
    const data = await response.json();
    console.log(data);



    quote.innerHTML = data[0].quote;
    author.innerHTML = data[0].author;


}



genBtn.addEventListener("click", getQuote);