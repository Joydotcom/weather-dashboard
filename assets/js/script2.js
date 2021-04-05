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

function getForecast(searchTerm) {
    if (!searchTerm) {
        return;
    }
}

var queryUrl =
"https://api.openweathermap.org/data/2.5/weather?q=" +
searchTerm +
"&appid=" +
apiKey +"&units=imperial";

