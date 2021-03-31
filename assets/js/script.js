var searchForm = $("#search-form");
var searchTermEl = $("#search-term");
var apiKey = "6ac8192d5fafbf69b00f77373239cae0";

searchForm.on("submit", function (event) {
  event.preventDefault();

  // add item to history on left side of page
  // update localstorage with city.
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
      console.log(data.weather[0].icon)
      console.log(data.main.temp);
      console.log(data.main.humidity);
      // add weather to the DOM (1)
      getforecast(searchTerm);
      getUV(data.coord.lat, data.coord.lon)
    });
});

function getforecast(searchTerm){
fetch("http://api.openweathermap.org/data/2.5/forecast?q="+searchTerm+"&appid="+apiKey)
.then(function (response) {
    return response.json();
    })
  .then(function (data) {
      console.log(data);
$('#day1-date').empty;
$('#day1-date').append(data.list[0].main.temp);
$('#day2-date').empty;
$('#day2-date').append(data.list[1].main.temp);
$('#day3-date').empty;
$('#day3-date').append(data.list[2].main.temp);
$('#day4-date').empty;
$('#day4-date').append(data.list[3].main.temp);
$('#day5-date').empty;
$('#day5-date').append(data.list[4].main.temp);

$('#day1-date').empty;
$('#day1-date').append(data.list[0].main.temp);
$('#day2-date').empty;
$('#day2-date').append(data.list[1].main.temp);
$('#day3-date').empty;
$('#day3-date').append(data.list[2].main.temp);
$('#day4-date').empty;
$('#day4-date').append(data.list[3].main.temp);
$('#day5-date').empty;
$('#day5-date').append(data.list[4].main.temp);



      // (3)
      // loop through elements 0 to 5 in data.list
      // get the appropriate values from each object and add to the DOM
  })
}

function getUV(lat, lon) {
//http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
console.log(lat+" "+lon);

fetch("http://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid="+apiKey)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data.value);
      
      // add UV to the DOM (2)
    
  })

}

// read history from localstorage
// populate history on left side of page
// on click of any item in te history 
// load forecast info