const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

noBtn.addEventListener("click", () => {
  question.innerHTML = "Tu as osé clicker sur STOP !!!!";
  gif.src =
    "https://media.giphy.com/media/8CFKqeK9vks3C/giphy.gif";
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Ok j'arrete mais je vais venir te crouch le cul";
  gif.src =
    "https://media.giphy.com/media/cvEmwKxJYgjdNGgpTd/giphy.gif";
});