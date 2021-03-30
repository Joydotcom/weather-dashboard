var searchForm = $("#search-form");
var searchTermEl = $("#search-term");

searchForm.on("submit", function (event) {
  event.preventDefault();
});

var searchTerm = searchTermEl.val();
var longitude = "";
var latitude = "";

var apiKey = "6ac8192d5fafbf69b00f77373239cae0";

var queryUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=" +
  latitde +
  "&lon=" +
  longitude +
  "&exclude={part}&appid=" +
  apiKey;

  