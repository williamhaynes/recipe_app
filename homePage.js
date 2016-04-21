$(function(){
	// 'main' function called when page is loaded and ready
	
	// complete the following using jQuery
	
	// 1. find the addcontent button in task-two.html
	// 2. add an event listener for 'click' events
	// 3. assign the addContent() function to the click event
	$('#addPepper').click(function () {
		addContent();	

	});
	
	$('#removePepper').click(function(){
		removeContent();
	});
	
	$('#clearPepper').click(function(){
		clearContent();
	});

	$('#searchBox').keypress(function(e){
		if(e.which==13){
			addContent();
		}
	});
});

function addContent () {
	var itemToAdd = $("#searchBox"); //Get contents of SearchBar
	items_html = "<li class='ingredientsList'>" + itemToAdd.val() + "</li>"; //Add Wrappers
	if($(".ingredientsList").size()<12){
		$('#iAdded ul').append(items_html) //Add li to existing ul
	}
	else {
		removeContent();
		$('#iAdded ul').append(items_html) //Add li to existing ul
	}
	$('#searchBox').val("");
}

function removeContent(){
	$('#iAdded li:last-child').remove();
}

function clearContent(){
	$(".removalCaller").empty();
}