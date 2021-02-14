const urlParams = new URLSearchParams(window.location.search);
const seasonname = urlParams.get("seasonname");

const url = "https://kea-alt-del.dk/t7/api/seasons/";
console.log("hello");

fetch(url)
  .then((res) => res.json())
  .then(gotData);

function gotData(data) {
  data.forEach(showSeason);
  console.log(data);
}

function showSeason(season) {
  console.log(season);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("a").textContent = season.season;
  copy.querySelector("a").href = `store.html?season=${season.season}`;
  document.querySelector("ol").appendChild(copy);
}
