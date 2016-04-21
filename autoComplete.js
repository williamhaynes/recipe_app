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
    $('#searchBox').addEventListener("keypress", function () {
        var searchterm = "ojgflkjfgslgkflkjgfsdlkjfgdslkmsgfdlgfmnklfdsgkmnfsgdnmlgf";//$("#searchBox");
        $('#dropDown').html(searchterm);
        //call autocomplete function
        //autocompleteIngredients(searchterm);
        //return false;
    });
});

/*
 *This part of the function actually calls the json data

function autocompleteIngredients(searchterm){
    //call API
    //build url for request
    var url = "'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/autocomplete?query=' + searchterm + '-H 'X-Mashape-Key: e3bX6hAPJ4mshViuB0lABloX6jbWp1jr09AjsnW6Ut24xxUcOX'";
    $.getJSON(url, function(jsondata){
        //handle results
        autocompleteText(jsondata);
    });
}
/*
 * This part of the function returns and populates the drop down list on the search box

function autocompleteText(jsondata){

    var counter = 0;
    var i = 0;

    while(counter<10){ //limits list to first 10 results

        $('li#' + [i]).text(jsondata.Search[i]);
    }
}*/