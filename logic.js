var topics = [
    "animals", "basketball", "snowboarding", "guitars", "coding"
];


for (i=0; i<topics.length; i++) {
    $("#button-holder").append("<button>" + topics[i] + "</button>")
}
    

$("button").on("click", function() {

    var search = $(this).attr(topics[i]);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        search + "&api_key=OMvF7MreTMaLsz2K4XCzw2iylRg2DV4i";

$.ajax({
url: queryURL,
method: "GET"})
            
.then(function(response) {
            
var gifs = response.data

for (var h = 0; h < gifs.length; h++) {


var gifDiv = $("<div>");
var rating = results[h].rating;
var r = $("<p>").text("Rating: " + rating);
var images = $("<img>");

images.attr("src", results[i].images.fixed_height.url);


gifDiv.append(r);
gifDiv.append(images);


$("#gifs-appear-here").prepend(gifDiv);};
})

});
