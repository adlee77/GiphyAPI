var topics = [
    "animals", "basketball", "snowboarding", "guitars", "coding"
];
for (i=0; i<topics.length; i++) {
    $("#button-holder").append("<button>" + topics[i] + "</button>")
}