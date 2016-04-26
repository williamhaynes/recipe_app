$(document).ready(function(){
    $("#findRecipes").click(function(){
        alert("The button was clicked.");
        var ingredients = $(".removalCaller").text();
        alert(ingredients);
        fillText(ingredients);
    });
});

function fillText(ingredients){

    var fillTextAuto = $.ajax({
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients='+ingredients+'&limitLicense=false&number=6&ranking=1', // The URL to the API. You can get this in the API page of the API you intend to consume
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(data) { console.dir((data.source));
            alert("JSON teeheehee");
            var autoText = "";
            var counter = 0;
            var i = 0;

            while(counter<1){ //limits list to first 10 results
                var title = data[i].title+data[i].title;
                autoText += "<h2>"+ title +"</h2>";
                counter++;
                i++;
            }
            $(".FoodTitle").html(autoText);
        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "e3bX6hAPJ4mshViuB0lABloX6jbWp1jr09AjsnW6Ut24xxUcOX"); // Enter here your Mashape key
        }
    });



}