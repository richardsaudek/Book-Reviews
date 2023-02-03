// const throttledApi = _.throttle(api, 1000)
// throttledApi();
const DOMAIN = 'https://api.nytimes.com/svc/books/v3/reviews.json?';
const QUERY = "api-key=E1a7bAdoiHcGemouHZDyd8bfEwS3tUNd"
const OVERVIEW_API = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';

const button = document.querySelector("button")
const span1 = document.querySelector("span1")
const listing = document.querySelector(".book-list")
const output = document.querySelector('#output')

button.addEventListener("click", () => {
  const bookTitle = document.getElementById("input").value;
  getAuthor(bookTitle)
  
})
async function getAuthor(book_author) { 
  const url = `${DOMAIN}author=${book_author}&${QUERY}`;
  try {
    const results = await fetch(`${url}`)
    const json = await results.json()
    console.log(json);
    const imagebox = document.querySelector('#output')
    for (let index = 0; index < json.results.length; index++) {
      // imagebox.append(img)
      
      const bookbox = document.createElement("div");
      bookbox.classList.add("bookBox");
      
      const isbn13 = json.results[index].isbn13[0]
      const img = document.createElement('img')
      img.classList.add('bookImg')
      img.src = `https://pictures.abebooks.com/isbn/${isbn13}-us-300.jpg`
      bookbox.appendChild(img)
      

      const titleinfo = document.createElement("div")
      titleinfo.textContent = json.results[index].book_title
      bookbox.appendChild(titleinfo)
      
      const summaryinfo = document.createElement("div")
      summaryinfo.textContent = json.results[index].summary
      bookbox.appendChild(summaryinfo)

      const url = document.createElement("a")
      url.textContent = "Read the New York Times Review Here"
      url.href = json.results[index].url;
      url.target = "_blank";
      bookbox.appendChild(url)
      
      
      output.appendChild(bookbox)
      
      span1.innerHTML = json.results[index].book_author
      //updateCover()
    }
  }
  catch (error) {
  }
}
if (condition) {
  
} else {
  
}
// const authorinfo = document.createElement("div")
// // authorinfo.textContent = json.results[index].book_author
// bookbox.appendChild(authorinfo)



// const urlinfo = document.createElement("div")
// urlinfo.textContent = json.results[index].url
// bookbox.appendChild(urlinfo)



// function renderList(json) {
  //   listing.innerHTML = ""
  //   for (let movie of json.Search) {
    //     let Title = titleinfo;
    //     let Summary = summaryinfo
    //     let Link = url
    
    //     const div = document.createElement('div');
    //     const titleBox = document.createElement('p');
    //     const img = document.createElement(`img`)
    //   }
    // }
    
    // div.classList.add("bookBox")
    // img.classList.add('url')
    // titleBox.classList.add("titleBox")
    
    // titleBox.textContent = `${Title} ${releaseYear}`
    // img.src = `${Poster}`
    // listing.append(div);
    // div.appendChild(img);
    // div.appendChild(titleBox);
    
    
    
    
    // async function getBookImage(list_image)
    // const image = `${DOMAIN}image=${list_image}&${QUERY}`;
    // try {
    //   const results = await fetch(`${urlImage}`)
    //   const json = await results.json()
    //   console.log(json);
    // }
    // for (let index = 0; index < 10; index++) {
    // const bookbox = document.createElement("div");
    // bookbox.classList.add("bookBox");
      
    // function updateCover(id, isbn) {
    //   fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + "&key=AIzaSyAyINR2SYnt4K-0x6zh6S3x6NVUY15pY7Q", {
    //     method: 'get'
    //   })
    //   .then(response => { return response.json(); })
    //   .then(data => {
    //     var img = data.items[0].volumeInfo.imageLinks.thumbnail;
    //     img = img.replace(/^http:\/\//i, 'https://');
    //     $('#cover-' + id).attr('src', img);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     // console.log('Googel API Error: Defaulting to archival images for book #' + id + ' ISBN: ' + isbn);
    //     // var index = id - 1;
    //     // var img = archivedImages[index];
    //     // $('#cover-' + id).attr('src', img);
    //   });
    // }
