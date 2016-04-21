/**
 * Created by William Haynes
 * 21/04/2016.
 */

/*
 * This function is called by the searchBox on the index page
 * It's calls the Spoonacular APIs autocomplete ingredient function
 * It's purpose is to make it easier for users who can select from a list as they type.
 */
$(function(){
    var htmlstring = "";
    $('#searchBox').keyup(function() {
        var grabbedText = $('#searchBox').val();
        autocompleteIngredients(grabbedText);
        /*htmlstring += "<li>"+grabbedText+"</li>";
        $("#dropDown").html(htmlstring);*/
        //comment
    });
});

/*
 *This part of the function actually calls the json data
*/
function autocompleteIngredients(grabbedText){
    //call API
    //build url for request

    var ingredientsAutoCompleted = $.ajax({
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?query=' + grabbedText, // The URL to the API. You can get this in the API page of the API you intend to consume
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(data) { console.dir((data.source));
            var autoText = "";
            var counter = 0;
            var i = 0;

            while(counter<10){ //limits list to first 10 results
                var ingredients = data[i].name;
                autoText += "<li>"+ ingredients +"</li>" + "<br>";
                counter++;
                i++;
            }
            $("#dropDown").html(autoText);
            $("#dropDown").css("visibility","visible");

        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "e3bX6hAPJ4mshViuB0lABloX6jbWp1jr09AjsnW6Ut24xxUcOX"); // Enter here your Mashape key
        }
    });

    /*

    var url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?query=' + grabbedText + '/e3bX6hAPJ4mshViuB0lABloX6jbWp1jr09AjsnW6Ut24xxUcOX/';
    $.getJSON(url, function(jsondata){
        //handle results
        autocompleteText(jsondata);
    });*/
}
/*
 * This part of the function returns and populates the drop down list on the search box
*//*
function autocompleteText(jsondata){
    var autoText = "";
    var counter = 0;
    var i = 0;

    while(counter<10){ //limits list to first 10 results
        var ingredients = jsondata.Search[i].name;
        autoText += "<li>"+ ingredients +"</li>" + "<br>";
        counter++;
        i++;
    }
    $("#dropDown").html(autoText);
}*/