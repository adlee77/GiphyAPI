var topics = [
    "animals", "basketball", "snowboarding", "guitars", "coding"
];

$("#bread2").on("click", function () {

    topics.push($("#topicSelector").val().trim())
    console.log(topics)
    display()
});

function display() {
    //need to empty out button-holder so buttons don't re-append themselves.
    $("#button-holder").empty()
    for (i = 0; i < topics.length; i++) {
        $("#button-holder").append("<button class='bread'>" + topics[i] + "</button>")
    };
    $(".bread").on("click", function () {

        var search = $(this).text()

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            search + "&api_key=OMvF7MreTMaLsz2K4XCzw2iylRg2DV4i&limit=10";
        // console.log(search)


        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(response.data)
                var gifs = response.data

                $("#gifsHere").empty()

                for (var h = 0; h < gifs.length; h++) {


                    var gifDiv = $("<div>");
                    var rating = gifs[h].rating;
                    var r = $("<p>").text("Rating: " + rating);
                    var images = $("<img>");
                    
                    // make image attributions for still, animate, and normal state of gifs.
                    images.attr("src", gifs[h].images.original.url);
                    images.attr("data-still", gifs[h].images.original_still.url)
                    images.attr("data-animate", gifs[h].images.original.url);
                    images.attr("data-state", "animate");
                    images.attr("class", "bread3")



                    gifDiv.append(r);
                    gifDiv.append(images);


                    $("#gifsHere").prepend(gifDiv);
                };
                $(".bread3").on("click", function(){
                    //Set up variables for still, animal, and normal state
                    var dataState = $(this).attr("data-state")
                    var dataAnimate = $(this).attr("data-animate")
                    var dataStill = $(this).attr("data-still")

                    if (dataState === "animate"){
                        $(this).attr("data-state", "still")
                        $(this).attr("src", dataStill)
                    }
                    else {
                        $(this).attr("data-state", "animate")
                        $(this).attr("src", dataAnimate)
                    }
                })
            })

    });

}

display()




