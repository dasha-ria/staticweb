const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

let url = "https://kea-alt-del.dk/t7/api/products/";
if (season) {
  url += "?season=" + season;
}

fetch(url)
  .then((res) => res.json())
  .then((data) => data.forEach(showProduct));

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h1").textContent = product.productdisplayname;

  if (product.discount) {
    const oldprice = document.createElement("del");
    oldprice.textContent = product.price;
    copy.querySelector(".storeprice").textContent = `SEK ${
      product.price - product.discount
    } `;

    copy.querySelector(".storeprice").appendChild(oldprice);
  } else {
    copy.querySelector(".storeprice").textContent = `SEK ${product.price} `;
  }

  if (product.soldout) {
    const soldtext = document.createElement("p");
    soldtext.classList.add("soldtext");
    console.log("addtext");

    soldtext.textContent = "Sold Out";
    const soldbox = copy.querySelector(".soldoutbox");
    soldbox.classList.add("soldbox");
    soldbox.appendChild(soldtext);
  }

  copy.querySelector("a").href = `product.html?id=${product.id}`;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("#product123").appendChild(copy);
}
