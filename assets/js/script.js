window.addEventListener("load", function () {
  var localStorageHistory;
  if (!JSON.parse(localStorage.getItem("history"))) {
    localStorageHistory = [];
  } else {
    localStorageHistory = JSON.parse(localStorage.getItem("history"));
  }
});

var searchTermEl = $("#search-term");
var apiKey = "6ac8192d5fafbf69b00f77373239cae0";
var historyItems = [];
var searchForm = $("#search-form");

searchForm.on("submit", function (event) {
  event.preventDefault();

  var searchTerm = searchTermEl.val();
  document.querySelector("#forecast").innerHTML = "";


  var queryUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchTerm +
    "&appid=" +
    apiKey +
    "&units=imperial";

  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getForecast(searchTerm);
      // getUV(data.coord.lat, data.coord.lon);
    });
});

var forecastEl = document.querySelector("#forecast");
forecastEl.innerHTML = "<h4>";
forecastRowEl = document.createElement("div");
forecastRowEl.className = '"row"';

function getForecast(searchTerm) {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      searchTerm +
      "&appid=" +
      apiKey +
      "&units=imperial"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < 5; i++) {
        if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {
        }

        var cardCol = document.createElement("div");
        cardCol.classList.add("col-md-2");
        var cardEl = document.createElement("div");
        cardEl.classList.add("card", "text-white", "bg-primary");
        var windSpeedEl = document.createElement("p");
        windSpeedEl.classList.add("card-text");
        var humEl = document.createElement("p");
        humEl.classList.add("card-text");
        var bodyEl = document.createElement("div");
        bodyEl.classList.add("card-body", "p-1");
        var titleEl = document.createElement("h5");
        titleEl.classList.add("card-title");
        titleEl.textContent = new Date(
          data.list[i].dt_txt
        ).toLocaleDateString();
        console.log(data.list[i].dt_txt);
        var iconEl = document.createElement("img");
        iconEl.setAttribute(
          "src",
          "https://openweathermap.org/img/w/" +
            data.list[i].weather[0].icon +
            ".png"
        );

        var p1El = document.createElement("p");
        p1El.classList.add("card-text");
        p1El.textContent = "Temp: " + data.list[i].main.temp + "F";

        var p2El = document.createElement("p");
        p2El.classList.add("card-text");
        p2El.textContent = "Humidity: " + data.list[i].main.humidity + "%";

        cardCol.appendChild(cardEl);
        bodyEl.appendChild(titleEl);
        bodyEl.appendChild(iconEl);
        bodyEl.appendChild(windSpeedEl);
        bodyEl.appendChild(humEl);
        bodyEl.appendChild(p1El);
        bodyEl.appendChild(p2El);
        cardEl.appendChild(bodyEl);
        forecastEl.appendChild(cardCol);
      }
    });
}

// var mySection = document.getElementById("mySection")
// var myVar = mySection.appendChild(<all the sections you want to add here>)
