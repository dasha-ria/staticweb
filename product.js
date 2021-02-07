const url = "https://kea-alt-del.dk/t7/api/products/1163";

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(
    "img.productpic"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
}
