$(function(){
    $( document ).ready(function(){
        var recipeID = '622622';
        alert(recipeID);
        fillText(recipeID);
    });
});

function fillText(recipeID){

    var RecipeInfo = $.ajax({
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+recipeID+'/information?includeNutrition=false',
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function (data2) {console.dir((data2.source));
            alert("Inner loop");
            alert(data2.readyInMinutes);
            $("#FoodPicFinal").html("<img src="+ data2.image +" alt='Recipe1 Image'>");
            $("#FoodTitleFinal").html("<p>"+data2.title+"</p>");
            $("#FoodCookingTimeFinal").html("<p>"+data2.readyInMinutes+'mins'+"</p>");
            for(var i=0; i<data2.extendedIngredients.length; i++)
            {
                $("#IngredientsFinal").append("<li>" +data2.extendedIngredients[i].name+"  "+data2.extendedIngredients[i].amount+data2.extendedIngredients[i].unitShort+"</li>");
            }

            //SCOTT BITTY
            var ExtractRecipeFromWebsite = $.ajax({
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract?forceExtraction=false&url=http%3A%2F%2Fsarahscucinabella.com%2F2010%2F10%2F06%2Fbrown-butter-apple-crumble%2F',
                type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
                data: {}, // Additional parameters here
                dataType: 'json',
                success: function (data3) {console.dir((data3.source));
                    alert("Inner Inner loop");
                    var wholestring = data3.instructions;
                    var trimmedString = wholestring.substring(0, 100000);
                    $("#FoodInstructionsFinal").html("<p>" + trimmedString+"</p>");

                },
                error: function(err) { alert(err); },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("X-Mashape-Authorization", "e3bX6hAPJ4mshViuB0lABloX6jbWp1jr09AjsnW6Ut24xxUcOX"); // Enter here your Mashape key

                }
            });




            //---------------------------------------Dont Go Over This Line--------------------------------------------------------------

        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "e3bX6hAPJ4mshViuB0lABloX6jbWp1jr09AjsnW6Ut24xxUcOX"); // Enter here your Mashape key
        }
    });



}


//USEFULL CODE
//var wholestring = data2.text;
//var trimmedString = wholestring.substring(0, 100);

