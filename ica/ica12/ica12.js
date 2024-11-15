// API 
const API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const outputParagraph = document.getElementById('output');
const fetchButton = document.getElementById('fetchButton');

async function getJoke() {
  try {
    const response = await fetch(API_URL); 
    if (!response.ok) throw new Error("error");
    const data = await response.json();
    displayRes(data.joke);
  } catch (error) {
    console.error(error);
    alert("problem");
  }
}

function displayRes(joke) {
  outputParagraph.textContent = joke;
}

fetchButton.addEventListener('click', getJoke);

window.addEventListener('DOMContentLoaded', getJoke);
