const API_URL = "https://corsproxy.io/?https://xkcd.com/";
const outputContainer = document.getElementById('output');
const fetchButton = document.getElementById('fetchButton');

async function getRandomComic() {
  try {
    const randomComicNumber = Math.floor(Math.random() * (3000 - 1)) + 1; // get a random comic out of 3000
    const response = await fetch(`${API_URL}${randomComicNumber}/info.0.json`);
    if (!response.ok) throw new Error("error");
    const data = await response.json();
    displayComic(data);
  } catch (error) {
    console.error(error);
    alert("problem!");
  }
}

function displayComic(comic) {
  outputContainer.innerHTML = `
    <h2>${comic.title}</h2>
    <img src="${comic.img}" alt="${comic.alt}" title="${comic.alt}">
    <p>Published on: ${comic.year}-${comic.month}-${comic.day}</p>
  `;
}

fetchButton.addEventListener('click', getRandomComic);

window.addEventListener('DOMContentLoaded', getRandomComic);
