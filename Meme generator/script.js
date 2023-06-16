const generateMemebtn = document.querySelector(".meme-generator .btn") ;
const memeImage = document.querySelector(".meme-generator img") ;
const memeTitle = document.querySelector(".meme-generator .title") ;
const memeAuthor = document.querySelector(".meme-generator .author-name") ;

const updateDetails = (url,title,author) => {
    memeImage.setAttribute("src",url);
    // .innerHTML return the content of html 
    memeTitle.innerHTML = title ;
    memeAuthor.innerHTML = `Meme by ${author}`;
}

const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(data => 
    {
        updateDetails(data.url,data.title,data.author) ;//here we'll pass url of the image,title and author
    });  
    // .then returns the promise which is fulfilled
} ;

generateMemebtn.addEventListener("click",generateMeme) ;

generateMeme() ; //for showing new meme after loading

