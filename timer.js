const display = document.getElementById("display");
const mode = document.getElementById("mode");
const start =   document.getElementById("start")
const pause =   document.getElementById("pause")
const reset =   document.getElementById("reset")
let homeBtn = document.querySelector(".home-btn");
      let themeToggle = document.querySelector("#theme-toggle");
let sun = document.querySelector("#sun");
let main = document.querySelector("main");
let button = document.querySelector("button");
let container = document.querySelector(".container");
let buttons = document.querySelector(".buttons");

homeBtn.addEventListener("click",() => {
    history.back();
  })

     let flag =
  JSON.parse(localStorage.getItem("flaagg")) != null
    ? JSON.parse(localStorage.getItem("flaagg"))
    : true;

  themeUi();

function themeUi() {
  if (!flag) {
    moon.style.display = "none";
    sun.style.display = "block";
    main.style.backgroundColor = "black";
    button.style.backgroundColor = "lightgray";
    buttons.style.backgroundColor = "lightgray";
    main.style.color = "white ";
    // button.style.color = "black ";
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
     buttons.style.backgroundColor = "#efe8d8";
    themeToggle.style.backgroundColor = "#efe8d8";
    main.style.color = "black";
    // button.style.color = "white";
  }
}

themeToggle.addEventListener("click", () => {
  flag = !flag;
  localStorage.setItem("flaagg", JSON.stringify(flag));
  themeUi();
});



 const focus = 25 * 60;       
  const breakk = 5 * 60;

  let isfocus = true;
  let remaining = focus;
  let timerId = null;


  function render() {
    const m = String(Math.floor(remaining / 60)).padStart(2, "0");
    const s = String(remaining % 60).padStart(2, "0");
    display.textContent = `${m}:${s}`;
    mode.textContent = isfocus ? "focus" : "breakk";
  }

  function tick() {
    remaining--;
    if (remaining < 0) {
      isfocus = !isfocus;             
      remaining = isfocus ? focus : breakk;
      alert(isfocus ? "breakk over. Back to focus!" : "Time for a breakk!");
    }
    render();
  }

start.addEventListener("click", () => {
    if (timerId === null) timerId = setInterval(tick, 1000);
  });

  pause.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
  });

  reset.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    isfocus = true;
    remaining = focus;
    render();
  });

  render();
