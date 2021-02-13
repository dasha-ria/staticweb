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
  document.querySelector("h1.productdisplayname").textContent =
    product.productdisplayname;

  if (product.soldout) {
    const soldtext = document.createElement("p");
    soldtext.classList.add("soldtext");
    console.log("addtext");

    soldtext.textContent = "Sold Out";
    const soldbox = document.querySelector(".soldoutbox2");
    soldbox.classList.add("soldbox2");
    soldbox.appendChild(soldtext);
  }

  if (product.discount) {
    const oldprice = document.createElement("del");
    oldprice.textContent = product.price;
    document.querySelector(".productprice").textContent = `SEK ${
      product.price - product.discount
    } `;

    document.querySelector(".productprice").appendChild(oldprice);
  } else {
    document.querySelector(
      ".productprice"
    ).textContent = `SEK ${product.price} `;
  }
}
