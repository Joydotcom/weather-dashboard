window.addEventListener("load", function() {

    var localStorageHistory;
    if (!JSON.parse(localStorage.getItem("history"))) {

        localStorageHistory = []; 
    } else {
        localStorageHistory = JSON.parse(localStorage.getItem("history"));
    }

})

var historyItems = [];

function getForecast(searchValue) {
    if (!searchValue) {
        return;
    }

}