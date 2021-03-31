var searchForm = $("#search-form");
var searchTermEl = $("#search-term");
var apiKey = "6ac8192d5fafbf69b00f77373239cae0";
var dateTime = moment().format("MM/DD/YYYY");

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
fetch("http://api.openweathermap.org/data/2.5/forecast?q="+searchTerm+"&appid="+apiKey+"&units=imperial")
.then(function (response) {
    return response.json();
    })
  .then(function (data) {
      console.log(data);
$('#day1-date').empty;
$('#day1-date').append(moment().format("MM/DD/YYYY"));
$('#day2-date').empty;
$('#day2-date').append(moment().add(1, 'days').calendar());
$('#day3-date').empty;
$('#day3-date').append(moment().add(2, 'days').calendar());
$('#day4-date').empty;
$('#day4-date').append(moment().add(3, 'days').calendar());
$('#day5-date').empty;
$('#day5-date').append(moment().add(4, 'days').calendar());

// $('#day1-date').empty;
// $('#day1-date').append(data.list[0].main.temp);
$('#day1-humidity').empty;
$('#day1-humidity').append(data.list[0].main.humidity);
$('#day2-humidity').empty;
$('#day2-humidity').append(data.list[1].main.humidity);
$('#day3-humidity').empty;
$('#day3-humidity').append(data.list[2].main.humidity);
$('#day4-humidity').empty;
$('#day4-humidity').append(data.list[3].main.humidity);
$('#day5-humidity').empty;
$('#day5-humidity').append(data.list[4].main.humidity);

$('#day1-wind').empty;
$('#day1-wind').append(data.list[0].wind.speed);
$('#day2-wind').empty;
$('#day2-wind').append(data.list[1].wind.speed);
$('#day3-wind').empty;
$('#day3-wind').append(data.list[2].wind.speed);
$('#day4-wind').empty;
$('#day4-wind').append(data.list[3].wind.speed);
$('#day5-wind').empty;
$('#day5-wind').append(data.list[4].wind.speed);

$('#day1-fcast').empty;
$('#day1-fcast').append(data.list[0].main.temp);
$('#day2-fcast').empty;
$('#day2-fcast').append(data.list[1].main.temp);
$('#day3-fcast').empty;
$('#day3-fcast').append(data.list[2].main.temp);
$('#day4-fcast').empty;
$('#day4-fcast').append(data.list[3].main.temp);
$('#day5-fcast').empty;
$('#day5-fcast').append(data.list[4].main.temp);

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