const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//const id = 1163;
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(
    "img.productpic"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
}
