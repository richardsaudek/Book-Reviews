const DOMAIN = 'https://api.nytimes.com/svc/books/v3/reviews.json?';
const QUERY = "api-key=E1a7bAdoiHcGemouHZDyd8bfEwS3tUNd"

const button = document.querySelector("button")
const listing = document.querySelector(".book-list")
 

async function getAuthor(book_author) {
 
  const url = `${DOMAIN}author=${book_author}&${QUERY}`;

  try {
    const res = await fetch(`${url}`)
    const json = await res.json()
    console.log(json);
    return json;
  } catch (error) {
  
  }
}
getAuthor('stephen king')

  // async function
  //   const res = await 'https://api.nytimes.com/svc/books/v3/reviews.json'
  // const json = res.json()
  //   return json

  // async function api(author) {
  //   const url = `${DOMAIN}/reviews.json${QUERY}`;
  //   const res = await fetch(url)
  //   const json = await res.json()
  //   console.log(`This is the result of the API function`);
  //   console.log(json);
  //   return json
  //   console.log('Haruki Murakami');
  // }
//   const throttledApi = _.throttle(api, 1000)
//   throttledApi();
  
//   button.addEventListener("click"), () => {
//     const bookList = document.getElementById("blank").value;
//     searchApi(bookList)
//   }
// }
  // async function renderList(json) {
