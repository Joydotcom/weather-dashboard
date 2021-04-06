var searchForm = $("#search-form");
var searchTermEl = $("#search-term");
var apiKey = "6ac8192d5fafbf69b00f77373239cae0";
var dateTime = moment().format("MM/DD/YYYY");

var iconcode = "https://api.openweathermap.org/data/2.5/forecast?q=.weather[0].icon";

searchForm.on("submit", function (event) {
  event.preventDefault();
  for (var i = 0; i < 5; i++) {
  
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
      getForecast(searchTerm);
      getUV(data.coord.lat, data.coord.lon);

    });
});

var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";

function getForecast(searchTerm){
fetch("https://api.openweathermap.org/data/2.5/forecast?q="+searchTerm+"&appid="+apiKey+"&units=imperial")
.then(function (response) {
    return response.json();
    })
  .then(function (data) {
      console.log(data);
    
$('#day1-icon').empty;
$('#day1-icon').append(data.list[0].weather.icon);


$('#day1-date').empty;
$('#day1-date').append(moment().format("MM/DD/YYYY"));
$('#day2-date').empty;
$('#day2-date').append(moment().add(1, 'days').format("MM/DD/YYYY"));
$('#day3-date').empty;
$('#day3-date').append(moment().add(2, 'days').format("MM/DD/YYYY"));
$('#day4-date').empty;
$('#day4-date').append(moment().add(3, 'days').format("MM/DD/YYYY"));
$('#day5-date').empty;
$('#day5-date').append(moment().add(4, 'days').format("MM/DD/YYYY"));

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
// https://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
console.log(lat+" "+lon);

fetch("https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid="+apiKey)
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


<!--     
            <div class="container-fluid">
              <div class="row"> -->
                <!-- <aside class="col-lg-3 bg-light"> -->
                  <!-- <h5 class="mt-1">Search for a City:</h5>
                  <div class="form-inline form-group">
                    <input class="form-control" type="text" id="search-value" />
                    <button class="btn btn-primary" id="search-button">
                      <i class="fa fa-search">Search</i>
                    </button> -->
                    
                    </div>

                    <!-- <section>  -->
        <!-- <h2 class="display-6 text-center">5 Day Forecast</h2>
<div id= "forecast" class = "container row justify-content-center">
<div class="col-2 text-center my-auto">
    <div class="card card-block"  id ="fcast"> 
        <p  id ="day1-date" class="card-text"></p>
        <p id="day1-icon"><img id="wicon1" src="http://openweathermap.org/img/w/04d.png" alt="Weather icon"></p>
        <p id="day1-fcast" class="weathernum"><span>Temp: </span></p>
        <p  id ="day1-humidity" class="card-text">Humidity:</p>
        <p  id ="day1-wind" class="card-text">Wind Speed: </p>
    </div>
</div>
<div class="col-2 text-center my-auto">
            <div class="card card-block"  id ="fcast">
              <p  id ="day2-date" class="card-text"></p>
              <p id="day2-icon"><img id="wicon1" src="http://openweathermap.org/img/w/04d.png" alt="Weather icon"></p>
              <p id="day2-fcast" class="weathernum"><span>Temp: </span></p>
              <p  id ="day2-humidity" class="card-text">Humidity: </p>
              <p  id ="day2-wind" class="card-text">Wind Speed: </p>
            </div>
        </div>
        <div class="col-2 text-center my-auto">
            <div class="card card-block"  id ="fcast">
              <p  id ="day3-date" class="card-text"></p>
              <p id="day3-icon"><img id="wicon1" src="http://openweathermap.org/img/w/04d.png" alt="Weather icon"></p>
              <p id="day3-fcast" class="weathernum"><span>Temp: </span></p>
              <p  id ="day3-humidity" class="card-text">Humidity: </p>
              <p  id ="day3-wind" class="card-text">Wind Speed: </p>
            </div>
        </div>
        <div class="col-2 text-center my-auto">
            <div class="card card-block"  id ="fcast">
              <p  id ="day4-date" class="card-text"></p>
              <p id="day4-icon"><img id="wicon1" src="http://openweathermap.org/img/w/04d.png" alt="Weather icon"></p>
              <p id="day4-fcast" class="weathernum"><span>Temp: </span></p>
              <p  id ="day4-humidity" class="card-text">Humidity: </p>
              <p  id ="day4-wind" class="card-text">Wind Speed: </p>
            </div>
        </div>
        <div class="col-2 text-center my-auto">
            <div class="card card-block"  id ="fcast">
              <p  id ="day5-date" class="card-text"></p>
              <p id="day5-icon"><img id="wicon1" src="http://openweathermap.org/img/w/04d.png" alt="Weather icon"></p>
              <p id="day5-fcast" class="weathernum"><span>Temp: </span></p>
              <p  id ="day5-humidity" class="card-text">Humidity: </p>
              <p  id ="day5-wind" class="card-text">Wind Speed: </p>
            </div>
        </div> -->
        
