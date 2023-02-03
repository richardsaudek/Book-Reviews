const DOMAIN = 'https://api.nytimes.com/svc/books/v3/reviews.json?';
const QUERY = "api-key=E1a7bAdoiHcGemouHZDyd8bfEwS3tUNd"
const OVERVIEW_API = '/lists/overview.json?';
const IMAGE_API = 'list_image'

// const throttledApi = _.throttle(api, 1000)
// throttledApi();
const button = document.querySelector("button")
//let theText = <input>("")</input>;
const span1 = document.querySelector("span1")
const listing = document.querySelector(".book-list")
const test = document.querySelector("#test")
console.log(test);
const output = document.querySelector('#output')

button.addEventListener("click", () => {
  const bookTitle = document.getElementById("input").value;
  getAuthor(bookTitle)
  
})
async function getBookImage(list_image)
const urlImage = `${DOMAIN}author=${book_author}&${QUERY}&${OVERVIEW_API}&{IMAGE_API}`;
try {
  const results = await fetch(`${urlImage}`)
  const json = await results.json()
  console.log(json);
}
for (let index = 0; index < 10; index++) {
const bookbox = document.createElement("div");
bookbox.classList.add("bookBox");
  async function getAuthor(book_author) {
    const url = `${DOMAIN}author=${book_author}&${QUERY}`;
    try {
      const results = await fetch(`${url}`)
      const json = await results.json()
      console.log(json);
    }
      
for (let index = 0; index < 10; index++) {
  const bookbox = document.createElement("div");
  bookbox.classList.add("bookBox");
  
  const titleinfo = document.createElement("div")
  titleinfo.textContent = json.results[index].book_title
  bookbox.appendChild(titleinfo)

  const url = document.createElement("div")
  url.textContent = json.results[index].url
  bookbox.appendChild(url)

  const summaryinfo = document.createElement("div")
  summaryinfo.textContent = json.results[index].summary
  bookbox.appendChild(summaryinfo)
  
  // const authorinfo = document.createElement("div")
  // // authorinfo.textContent = json.results[index].book_author
  // bookbox.appendChild(authorinfo)
  
  

  // const urlinfo = document.createElement("div")
  // urlinfo.textContent = json.results[index].url
  // bookbox.appendChild(urlinfo)

  output.appendChild(bookbox)

  span1.innerHTML = json.results[index].book_author
} 
    }
    catch (error) {
    }
    
    }
function renderList(json) {
  listing.innerHTML = ""
  for (let movie of json.Search) {
    let Title = titleinfo;
    let Summary = summaryinfo
    let Link = url
      
    const div = document.createElement('div');
    const titleBox = document.createElement('p');
    const img = document.createElement(`img`)
  }
}

    // div.classList.add("bookBox")
    // img.classList.add('url')
    // titleBox.classList.add("titleBox")
    
    // titleBox.textContent = `${Title} ${releaseYear}`
    // img.src = `${Poster}`
    // listing.append(div);
    // div.appendChild(img);
    // div.appendChild(titleBox);
    



