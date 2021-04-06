window.addEventListener("load", function() {

    var localStorageHistory;
    if (!JSON.parse(localStorage.getItem("history"))) {
   localStorageHistory = []; 
    } else {
        localStorageHistory = JSON.parse(localStorage.getItem("history"));
    }

})

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



