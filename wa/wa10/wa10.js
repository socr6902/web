const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

console.log("wa10.js loaded");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText = "On a misty night, the air was thick with tension as :insertx: crept through the shadows. They were heading towards :inserty:, a place whispered about in fearful tones. When they arrived, a monstrous :insertz: Bianca emerged from the darkness, its eyes glowing and breath chilling. Bianca saw the whole ordeal from behind a tree but didn't dare make a sound — after all, :insertx: was known for seeking out the most terrifying creatures.";
const insertX = ["Grendel the Gremlin", "Mad Mortimer", "The Frost Fiend"];
const insertY = ["The Abandoned Asylum", "Phantom Carnival", "The Haunted Manor"];
const insertZ = ["vanished into thin air with a chilling scream.", "transformed into a swarm of bats and scattered.", "sank into the ground, leaving only a shadow behind."];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bianca', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }
    
  story.style.visibility = 'visible';
  story.textContent = newStory;
}
