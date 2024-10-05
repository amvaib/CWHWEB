const apikey = "e6efc591554d4509a62d43f58fde0eb8";

const blogContainer = document.querySelector(".cardcontainer");

async function fetchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e6efc591554d4509a62d43f58fde0eb8`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;

    } catch(error){
        console.error("Error fetching random news", error);
        return[];
        
    }
}


function displayBlogs(articles){
    blogContainer.innerHTML= "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blogcard");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        title.textContent = article.title;
        const description = document.createElement("p");
        description.textContent = article.description;


        blogCard.appendChild(img)
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogContainer.appendChild(blogCard);

    });
}

(async()=>{
    try{
        const articles = await fetchRandomNews();
        displayBlogs(articles);

    }catch(error){
        console.error("Error fetching random news",error);

    }
})();