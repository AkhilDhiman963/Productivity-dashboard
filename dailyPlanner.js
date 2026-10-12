let homeBtn = document.querySelector(".home-btn");
let themeToggle = document.querySelector("#theme-toggle");
let sun = document.querySelector("#sun");
let main = document.querySelector("main");
let button = document.querySelector("button");
const STORAGE_KEY = "dailyPlanner";
const form = document.querySelector("form");
const textareas = document.querySelectorAll("form textarea");

function loadPlanner() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    textareas.forEach((ta, i) => {
      ta.value = saved[i] || "";
    });
  } catch (err) {
    console.error("Could not load planner:", err);
  }
}

function savePlanner() {
  const data = Array.from(textareas, ta => ta.value);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  savePlanner();
});

loadPlanner();  







homeBtn.addEventListener("click",() => {
    history.back();
  })

     let flag =
  JSON.parse(localStorage.getItem("fflaagg")) != null
    ? JSON.parse(localStorage.getItem("fflaagg"))
    : true;

  themeUi();

function themeUi() {
  if (!flag) {
    moon.style.display = "none";
    sun.style.display = "block";
    main.style.backgroundColor = "black";
    button.style.backgroundColor = "lightgray";
    // buttons.style.backgroundColor = "lightgray";
    main.style.color = "white ";
    // button.style.color = "black ";
    themeToggle.style.backgroundColor = "lightgray";
    themeToggle.style.color = "black";
    // container.style.border = "1px solid lightgray"
    // textarea.style.backgroundColor = "lightgray"
} 
else {
    //   container.style.border = "1px solid black"
    moon.style.display = "block";
    sun.style.display = "none";
    main.style.backgroundColor = "#efe8d8";
     button.style.backgroundColor = "#efe8d8";
    //  buttons.style.backgroundColor = "#efe8d8";
    themeToggle.style.backgroundColor = "#efe8d8";
    main.style.color = "black";
    // button.style.color = "white";
  }
}

themeToggle.addEventListener("click", () => {
  flag = !flag;
  localStorage.setItem("fflaagg", JSON.stringify(flag));
  themeUi();
});


