$(function(){
    $( document ).ready(function(){
        var url = document.location.href,
            params = url.split('?')[1].split('&'),
            data = {}, tmp;
        for(var i = 0, l = params.length;i < l; i++){
            tmp = params[i].split('=');
            data[tmp[0]] = tmp [1];
        }
        var ingredients = data.ingredients;
        //alert(ingredients);
        fillText(ingredients);
    });
});

function fillText(ingredients){

    var FindByIngredients = $.ajax({
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients='+ingredients+'&limitLicense=false&number=6&ranking=1',
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(data) { console.dir((data.source));
            //alert("JSON teeheehee");
            //---------------------------------------NUMBER 1--------------------------------------------------------------
            $("#FoodId1").html(data[0].id);
            $("#FoodTitle1").html("<h2>"+ data[0].title +"</h2>");
            $("#IngredientsMissing1").html("<p>"+ data[0].missedIngredientCount +' Ingredients Missing'+" </p>");
            $("#IngredientsUsed1").html("<p>"+data[0].usedIngredientCount+' Ingredients Used'+"</p>");
            $("#FoodLikes1").html("<p>"+data[0].likes+' likes!'+"</p>");


            var RecipeInfo = $.ajax({
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+data[0].id+'/information?includeNutrition=false',
                type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
                data: {}, // Additional parameters here
                dataType: 'json',
                success: function (data2) {console.dir((data2.source));
                    //alert("Inner loop");
                    //alert(data2.readyInMinutes);
                    $("#FoodCookingTime1").html("<p>"+data2.readyInMinutes+'mins'+"</p>");
                    $("#FoodPic1").html("<img src="+ data2.image +" alt='Recipe1 Image'>");
                },
                error: function(err) { alert(err); },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("X-Mashape-Authorization", "e3bX6hAPJ4mshViuB0lABloX6jbWp1jr09AjsnW6Ut24xxUcOX"); // Enter here your Mashape key

                }
            });

            //---------------------------------------NUMBER 2--------------------------------------------------------------
            $("#FoodId2").html(data[1].id);
            $("#FoodTitle2").html("<h2>"+ data[1].title +"</h2>");
            $("#IngredientsMissing2").html("<p>"+ data[1].missedIngredientCount +' Ingredients Missing'+" </p>");
            $("#IngredientsUsed2").html("<p>"+data[1].usedIngredientCount+' Ingredients Used'+"</p>");
            $("#FoodLikes2").html("<p>"+data[1].likes+' likes!'+"</p>");


            var RecipeInfo = $.ajax({
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+data[1].id+'/information?includeNutrition=false',
                type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
                data: {}, // Additional parameters here
                dataType: 'json',
                success: function (data2) {console.dir((data2.source));
                    //alert("Inner loop");
                    //alert(data2.readyInMinutes);
                    $("#FoodCookingTime2").html("<p>"+data2.readyInMinutes+'mins'+"</p>");
                    $("#FoodPic2").html("<img src="+ data2.image +" alt='Recipe2 Image'>");

                },
                error: function(err) { alert(err); },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("X-Mashape-Authorization", "e3bX6hAPJ4mshViuB0lABloX6jbWp1jr09AjsnW6Ut24xxUcOX"); // Enter here your Mashape key

                }
            });

            //---------------------------------------NUMBER 3--------------------------------------------------------------
            $("#FoodId3").html(data[2].id);
            $("#FoodTitle3").html("<h2>"+ data[2].title +"</h2>");
            $("#IngredientsMissing3").html("<p>"+ data[2].missedIngredientCount +' Ingredients Missing'+" </p>");
            $("#IngredientsUsed3").html("<p>"+data[2].usedIngredientCount+' Ingredients Used'+"</p>");
            $("#FoodLikes3").html("<p>"+data[2].likes+' likes!'+"</p>");


            var RecipeInfo = $.ajax({
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+data[2].id+'/information?includeNutrition=false',
                type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
                data: {}, // Additional parameters here
                dataType: 'json',
                success: function (data2) {console.dir((data2.source));
                    //alert("Inner loop");
                    //alert(data2.readyInMinutes);
                    $("#FoodCookingTime3").html("<p>"+data2.readyInMinutes+'mins'+"</p>");
                    $("#FoodPic3").html("<img src="+ data2.image +" alt='Recipe3 Image'>");

                },
                error: function(err) { alert(err); },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("X-Mashape-Authorization", "e3bX6hAPJ4mshViuB0lABloX6jbWp1jr09AjsnW6Ut24xxUcOX"); // Enter here your Mashape key

                }
            });

            //---------------------------------------NUMBER 4--------------------------------------------------------------
            $("#FoodId4").html(data[3].id);
            $("#FoodTitle4").html("<h2>"+ data[3].title +"</h2>");
            $("#IngredientsMissing4").html("<p>"+ data[3].missedIngredientCount +' Ingredients Missing'+" </p>");
            $("#IngredientsUsed4").html("<p>"+data[3].usedIngredientCount+' Ingredients Used'+"</p>");
            $("#FoodLikes4").html("<p>"+data[3].likes+' likes!'+"</p>");


            var RecipeInfo = $.ajax({
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+data[3].id+'/information?includeNutrition=false',
                type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
                data: {}, // Additional parameters here
                dataType: 'json',
                success: function (data2) {console.dir((data2.source));
                    //alert("Inner loop");
                    //alert(data2.readyInMinutes);
                    $("#FoodCookingTime4").html("<p>"+data2.readyInMinutes+'mins'+"</p>");
                     $("#FoodPic4").html("<img src="+ data2.image +" alt='Recipe4 Image'>");

                },
                error: function(err) { alert(err); },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("X-Mashape-Authorization", "e3bX6hAPJ4mshViuB0lABloX6jbWp1jr09AjsnW6Ut24xxUcOX"); // Enter here your Mashape key

                }
            });

            //---------------------------------------NUMBER 5--------------------------------------------------------------
            $("#FoodId5").html(data[4].id);
            $("#FoodTitle5").html("<h2>"+ data[4].title +"</h2>");
            $("#IngredientsMissing5").html("<p>"+ data[4].missedIngredientCount +' Ingredients Missing'+" </p>");
            $("#IngredientsUsed5").html("<p>"+data[4].usedIngredientCount+' Ingredients Used'+"</p>");
            $("#FoodLikes5").html("<p>"+data[4].likes+' likes!'+"</p>");


            var RecipeInfo = $.ajax({
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+data[4].id+'/information?includeNutrition=false',
                type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
                data: {}, // Additional parameters here
                dataType: 'json',
                success: function (data2) {console.dir((data2.source));
                    //alert("Inner loop");
                    //alert(data2.readyInMinutes);
                    $("#FoodCookingTime5").html("<p>"+data2.readyInMinutes+'mins'+"</p>");
                    $("#FoodPic5").html("<img src="+ data2.image +" alt='Recipe5 Image'>");

                },
                error: function(err) { alert(err); },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("X-Mashape-Authorization", "e3bX6hAPJ4mshViuB0lABloX6jbWp1jr09AjsnW6Ut24xxUcOX"); // Enter here your Mashape key

                }
            });

            //---------------------------------------NUMBER 6--------------------------------------------------------------
            $("#FoodId6").html(data[5].id);
            $("#FoodTitle6").html("<h2>"+ data[5].title +"</h2>");
            $("#IngredientsMissing6").html("<p>"+ data[5].missedIngredientCount +' Ingredients Missing'+" </p>");
            $("#IngredientsUsed6").html("<p>"+data[5].usedIngredientCount+' Ingredients Used'+"</p>");
            $("#FoodLikes6").html("<p>"+data[5].likes+' likes!'+"</p>");


            var RecipeInfo = $.ajax({
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+data[5].id+'/information?includeNutrition=false',
                type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
                data: {}, // Additional parameters here
                dataType: 'json',
                success: function (data2) {console.dir((data2.source));
                    //alert("Inner loop");
                    //alert(data2.readyInMinutes);
                    $("#FoodCookingTime6").html("<p>"+data2.readyInMinutes+'mins'+"</p>");
                    $("#FoodPic6").html("<img src="+ data2.image +" alt='Recipe6 Image'>");

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



function fillURLid1(){
    var a = document.getElementById('FoodId1').innerHTML;
        url = 'page3.html?recipeId=' + encodeURIComponent(a);
    document.location.href = url;
}


function fillURLid2(){
    var a = document.getElementById('FoodId2').innerHTML;
    url = 'page3.html?recipeId=' + encodeURIComponent(a);
    document.location.href = url;
}


function fillURLid3(){
    var a = document.getElementById('FoodId3').innerHTML;
    url = 'page3.html?recipeId=' + encodeURIComponent(a);
    document.location.href = url;
}


function fillURLid4(){
    var a = document.getElementById('FoodId4').innerHTML;
    url = 'page3.html?recipeId=' + encodeURIComponent(a);
    document.location.href = url;
}


function fillURLid5(){
    var a = document.getElementById('FoodId5').innerHTML;
    url = 'page3.html?recipeId=' + encodeURIComponent(a);
    document.location.href = url;
}


function fillURLid6(){
    var a = document.getElementById('FoodId6').innerHTML;
    url = 'page3.html?recipeId=' + encodeURIComponent(a);
    document.location.href = url;
}


//USEFULL CODE
//var wholestring = data2.text;
//var trimmedString = wholestring.substring(0, 100);

