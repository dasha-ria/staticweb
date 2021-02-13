const data = [
  {
    id: 1163,
    gender: "Men",
    category: "Apparel",
    subcategory: "Topwear",
    articletype: "Tshirts",
    season: "Summer",
    productionyear: 2011,
    usagetype: "Sports",
    productdisplayname: "Sahara Team India Fanwear Round Neck Jersey",
    price: 895,
    discount: null,
    brandname: "Nike",
    soldout: 0,
  },
  {
    id: 1164,
    gender: "Men",
    category: "Apparel",
    subcategory: "Topwear",
    articletype: "Tshirts",
    season: "Winter",
    productionyear: 2015,
    usagetype: "Sports",
    productdisplayname: "Blue T20 Indian Cricket Jersey",
    price: 1595,
    discount: 28,
    brandname: "Nike",
    soldout: 1,
  },

  {
    id: 1165,
    gender: "Men",
    category: "Apparel",
    subcategory: "Topwear",
    articletype: "Tshirts",
    season: "Summer",
    productionyear: 2013,
    usagetype: "Sports",
    productdisplayname: "Mean Team India Cricket Jersey",
    price: 2495,
    discount: 45,
    brandname: "Nike",
    soldout: 0,
  },

  {
    id: 1525,
    gender: "Unisex",
    category: "Accessories",
    subcategory: "Bags",
    articletype: "Backpacks",
    season: "Fall",
    productionyear: 2010,
    usagetype: "Casual",
    productdisplayname: "Deck Navy Blue Backpack",
    price: 1299,
    discount: 55,
    brandname: "Puma",
    soldout: 0,
  },
];
data.forEach(showProduct);

function showProduct(product) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h1").textContent = product.productdisplayname;

  if (product.discount) {
    const oldprice = document.createElement("del");
    oldprice.textContent = product.price;
    copy.querySelector(".storeprice").textContent = `${
      product.price - product.discount
    } `;

    copy.querySelector(".storeprice").appendChild(oldprice);
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
