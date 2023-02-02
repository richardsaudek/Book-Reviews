const DOMAIN = 'https://api.nytimes.com/svc/books/v3/reviews.json?';
const QUERY = "api-key=E1a7bAdoiHcGemouHZDyd8bfEwS3tUNd"
// const throttledApi = _.throttle(api, 1000)
// throttledApi();
const button = document.querySelector("button")
//let theText = <input>("")</input>;
const span = document.querySelector("span")
const listing = document.querySelector(".book-list")
const test = document.querySelector("#test")
console.log(test);
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
for (let index = 0; index < 10; index++) {
  const bookbox = document.createElement("div");
  bookbox.classList.add("bookBox");

  const subtitle = document.createElement("div")
  subtitle.textContent = json.results[index].url
  bookbox.appendChild(subtitle)

  
  const authorinfo = document.createElement("div")
  // authorinfo.textContent = json.results[index].book_author
  bookbox.appendChild(authorinfo)
  
  const titleinfo = document.createElement("div")
  titleinfo.textContent = json.results[index].book_title
  bookbox.appendChild(titleinfo)
  
  const summaryinfo = document.createElement("div")
  summaryinfo.textContent = json.results[index].summary
  bookbox.appendChild(summaryinfo)

  const urlinfo = document.createElement("div")
  urlinfo.textContent = json.results[index].url
  bookbox.appendChild(urlinfo)

  output.appendChild(bookbox)





  span.innerHTML = json.results[index].book_author

  
}

  
    }
    catch (error) {
    }
  }





  // async function renderList(json) {
  //   listing.innerHTML = ""
  //   for (let book of json.Search) {
  //     let Title = book.Title;
  //     let Author = book.Author
  //     let NYTimesReview = book.Review
  //     let Summary = book.Summary
    
  //     const div = document.createElement('div');
  //     const titleBox = document.createElement('p');
  //     const img = document.createElement(`img`)
  
  //     div.classList.add("bookBox")
  //     img.classList.add('img')
  //     titleBox.classList.add("titleBox")

  //     // getAuthor('Haruki Murakami')
  //   }
  //   renderList(json)
  // }


