const DOMAIN = 'https://api.nytimes.com/svc/books/v3';
const QUERY = "?api-key=E1a7bAdoiHcGemouHZDyd8bfEwS3tUNd"

const button = document.querySelector("button")
const listing = document.querySelector(".book-list")


button.addEventListener("click", () => {
  const bookList = document.getElementById("blank").value;
  searchApi(bookList)
})


async function api() {
  const url = `${DOMAIN}/lists/best-sellers/history.json${QUERY}`;
  const res = await fetch(url)
  const json = await res.json()
  console.log(`This is the result of the API function`);
  console.log(json);
  return json
}
const throttledApi = _.throttle(api, 1000)
throttledApi();

// async function renderList(json) {


  // listing.innerHTML = ""
  // for (let list_name of json.Search) {
  //   let displayName = listing.display_name;
  // }
}