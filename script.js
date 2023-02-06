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
}
)
async function getAuthor(book_author) {
  const url = `${DOMAIN}author=${book_author}&${QUERY}`;
  try {
    const results = await fetch(`${url}`)
    const json = await results.json()
    console.log(json);
    output.innerHTML=""
    const imagebox = document.querySelector('#output')
    for (let index = 0; index < json.results.length; index++) {
      
      const bookbox = document.createElement("div");
      bookbox.classList.add("bookBox");

      const titlebox = document.createElement("div");
      titlebox.classList.add("titleBox");

      const summarybox = document.createElement("div");
      summarybox.classList.add("summaryBox");

      const urlbox = document.createElement("div");
      urlbox.classList.add("urlBox");

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
      url.textContent = "Read the Review"
      url.href = json.results[index].url;
      url.target = "_blank";
      bookbox.appendChild(url)
      
      
      output.appendChild(bookbox)

      span1.innerHTML = json.results[index].book_author
    }
  }
  catch (error) {
  }
}
