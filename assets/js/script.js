var searchForm = $("#search-form");
var searchTermEl = $("#search-term");

searchForm.on ("submit", function(event) {
event.preventDefault()
});

var searchterm = searchTermEl.val();
var longitude = "";
var latitude = "";