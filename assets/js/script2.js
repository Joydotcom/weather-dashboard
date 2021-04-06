window.addEventListener("load", function() {

    var localStorageHistory;
    if (!JSON.parse(localStorage.getItem("history"))) {
   localStorageHistory = []; 
    } else {
        localStorageHistory = JSON.parse(localStorage.getItem("history"));
    }

})

var searchTermEl = $("#search-term");
var apiKey = "6ac8192d5fafbf69b00f77373239cae0";
var historyItems = [];
var searchForm = $("#search-form");



searchForm.on("submit", function (event) {
    event.preventDefault();
  
    
    var searchTerm = searchTermEl.val();
  
    var queryUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchTerm +
      "&appid=" +
      apiKey +"&units=imperial";
  
    fetch(queryUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
       getForecast(searchTerm);
        getUV(data.coord.lat, data.coord.lon);
  
      });
  });


var forecastEl = document.querySelector("#forecast")

forecastEl.innerHTML= '<h4 class="mt-3">'

forecastRowEl = document.createElement('div');
forecastRowEl.className = '"row"';

console.log(data.list.length);


function getForecast(searchTerm){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+searchTerm+"&appid="+apiKey+"&units=imperial")
    .then(function (response) {
        return response.json();
        })
      .then(function (data) {
          console.log(data.list.length);
    

for (var i = 0; i < (data.list.length); i++) {
if (data.list[i].dt.txt.index('15:00:00') !== -1){
var cardCol = document.createElement('div');
cardCol.classList.add('col-md-2');
var cardEl = document.createElement('div');
cardEl.classList.add('card','text-white','bg-primary');
var windSpeedEl = document.createElement ('p');
windSpeedEl.classList.add('card-text');
var humEl = document.createElement('p');
humEl.classList.add('card-text');
var bodyEl = document.createElement('div');
bodyEl.classList.add('card-body','p-2');
var titleEl = document.createElement('h5')
titleEl.classList.add('card-title');
titleEl.textContent = new Date (
    data.list[i].dt.txt
) .toLocaleDateString();
var iconEl = document.createElement('img');
iconEl.setAttribute(
    'src' , "https://openweathermap.org/img/w/"+ data.list[i].weather[0].icon +".png"
)
}
}
})
}