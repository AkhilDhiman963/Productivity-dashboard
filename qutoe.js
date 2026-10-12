  const quote = document.getElementById("quote");
      const author = document.getElementById("author");
      let themeToggle = document.querySelector("#theme-toggle");
      let newQuote = document.querySelector("#new-quote");
let sun = document.querySelector("#sun");
let main = document.querySelector("main");
let button = document.querySelector("button");
let container = document.querySelector(".container");
let homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click",() => {
    history.back();
  })

      async function getQuote() {
        try {
          const res = await fetch("https://dummyjson.com/quotes/random");

          const data = await res.json();

          quote.textContent = `"${data.quote}"`;
          author.textContent = `- ${data.author}`;
        } catch (err) {
          console.error(err);
          quote.textContent = "Keep going. You're closer than you think.";
          author.textContent = "";
        }
      }

      getQuote();
      document.getElementById("new-quote").addEventListener("click", getQuote);

      let flag =
  JSON.parse(localStorage.getItem("flagg")) != null
    ? JSON.parse(localStorage.getItem("flagg"))
    : true;

themeUi();

function themeUi() {
  if (!flag) {
    moon.style.display = "none";
    sun.style.display = "block";
    main.style.backgroundColor = "black";
    button.style.backgroundColor = "lightgray";
    newQuote.style.backgroundColor = "lightgray";
    main.style.color = "white ";
    themeToggle.style.backgroundColor = "lightgray";
    themeToggle.style.color = "black";
    container.style.border = "1px solid lightgray"
} 
else {
      container.style.border = "1px solid black"
    moon.style.display = "block";
    sun.style.display = "none";
    main.style.backgroundColor = "#efe8d8";
     button.style.backgroundColor = "#efe8d8";
    newQuote.style.backgroundColor = "#efe8d8";
    themeToggle.style.backgroundColor = "#efe8d8";
    main.style.color = "black";
  }
}

themeToggle.addEventListener("click", () => {
  flag = !flag;
  localStorage.setItem("flagg", JSON.stringify(flag));
  themeUi();
});
