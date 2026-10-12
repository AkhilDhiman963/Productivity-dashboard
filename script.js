let main = document.querySelector("main");
let date = document.querySelector(".date");
let time = document.querySelector(".time");
let city = document.querySelector(".city");
let temperature = document.querySelector(".temperature");
let weather = document.querySelector(".weather");
let humidity = document.querySelector(".humidity");
let timeContainer = document.querySelector(".time-container");



async function timeAPi() {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=241e6bef558146a183633450260810&q=India",
    );
    const data = await response.json();

    const responsee = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=241e6bef558146a183633450260810&q=India",
    );
    const dataa = await responsee.json();

    date.textContent = `Date : ${Temporal.Now.plainDateISO()}`;

    setInterval(() => {
      const now = new Date();
      time.textContent = `Time : ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;
    }, 1000);

    city.textContent = ` City :  ${data.location.name}`;
    temperature.textContent = `Temperature : ${data.current.temp_c}`;
    weather.textContent = ` weather :  ${data.current.condition.text}`;
    humidity.textContent = `humidity : ${data.current.humidity}`;
  } catch (error) {
    console.log(error);
    timeContainer.textContent  = "Loading Time and Weather"
  }
}

timeAPi();

function imageDisplay() {
  let morningImageArray = [
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
];
let eveningImageArray = [
  "https://images.unsplash.com/photo-1472120435266-53107fd0c44a",
  "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b",
];
let nightImageArray = [
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1534791547706-05c1a1c7c4a8",
  "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401",
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
];

  function randomImage() {
     let randomValue = Math.floor(Math.random()*10)

      const now = new Date();
      let hours = now.getHours()

      if (hours>=0 || hours<=11) {
        main.style.backgroundImage = `url(${morningImageArray[randomValue]})`;        
      }
      else if (hours>=12 || hours<=20) {
        main.style.backgroundImage = `url(${eveningImageArray[randomValue]})`;        
      }
      else if (hours>=12 || hours<=20) {
        main.style.backgroundImage = `url(${nightImageArray[randomValue]})`;        
      }    
  }
  randomImage()

  setInterval(() => {
   randomImage()
  }, 10000);

}

imageDisplay()


