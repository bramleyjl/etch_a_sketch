$(document).ready(function(){

var rowNum = 40;
var box = 960;
<<<<<<< HEAD

$("#box").css("height", box + "px");
$("#box").css("width", box + "px")

var table = $('<table></table>');
	$('#box').append(table);
=======

$("#box").css("height", box + "px");
$("#box").css("width", box + "px")

var table = $('<table></table>');
	$('#box').append(table)


>>>>>>> 4f6194f35694082447f8bfaa40d527e82d844bbc

var gridMaker = function() {
	for (var x = 0; x < rowNum; x++) {

		var row = $('<tr></tr>');
		$(table).append(row);

		for (var i = 0; i < rowNum; i++) {
			var block = $('<div class="pixel"></div>');
			$(row).append(block);
		};
	};
	};

<<<<<<< HEAD
var pixSize = function() {
	$(".pixel").css("height", box / rowNum + "px");
	$(".pixel").css("width", box / rowNum + "px");
}

gridMaker(rowNum);
pixSize(rowNum)

$(".pixel").hover(
	function() {
	$(this).addClass("mouseOver");
});

//Reset switch

$("#clear").click(function() {
		$("tr").remove();
		gridMaker(rowNum);
		pixSize(rowNum);

		$(".pixel").hover(
=======


var pixSize = function() {
	$(".pixel").css("height", box / rowNum + "px");
	$(".pixel").css("width", box / rowNum + "px");
}

gridMaker(rowNum);
pixSize(rowNum)

$(".pixel").hover(
>>>>>>> 4f6194f35694082447f8bfaa40d527e82d844bbc
		function() {
		$(this).addClass("mouseOver");
		});
	});

//Change resolution and reset switch

$("#resolution").click(function() {
		rowNum = prompt("How many squares would you like? (Choose between 10-100)");
			
		if(isNaN(rowNum) === true) {
			alert("Please choose a real number!")
			return;
		}

		else if(rowNum < 10) {
			alert("Please choose a larger number.")
			return;
		}

		else if(rowNum > 100) {
			alert("Please choose a smaller number.")
			return;
		}

		else {

		$("tr").remove();
		gridMaker(rowNum);
		pixSize(rowNum);

		$(".pixel").hover(function() {
			$(this).addClass("mouseOver");
		});
		};
	});

<<<<<<< HEAD
//Color switch

$("#colors").click(function(){
		$(".pixel").css("background-color", "#ff3300");
		$(".mouseOver").css("background-color", "#0000ff");
		
		$(".pixel").hover(function() {
		$(this).css("background-color", "#0000ff");
		});
	});

//Black/white switch

$("#blackWhite").click(function(){
		$(".pixel").css("background-color", "#000000");
		$(".mouseOver").css("background-color", "#ffffff");

		$(".pixel").hover(function() {
		$(this).css("background-color", "#ffffff");
		});
	});
=======
$("#clear").click(
	function() {
		$(".pixel").removeClass("mouseOver");
	});

$("#resolution").click(
	function() {
		rowNum = prompt("How many squares would you like? (Choose between 10-100)");
			
		if(isNaN(rowNum) === true) {
			alert("Please choose a real number!")
			return;
		}

		else if(rowNum < 10) {
			alert("Please choose a larger number.")
			return;
		}

		else if(rowNum > 100) {
			alert("Please choose a smaller number.")
			return;
		}

		else {
		$("tr").remove();

		gridMaker(rowNum);
		pixSize(rowNum);

		$(".pixel").hover(
		function() {
		$(this).addClass("mouseOver");
		});
		}
	})

//Write colors functionality here

$("#colors").click(
	function(){
		$(".pixel").css("background-color", "#ff3300");
		$(".mouseOver").css("background-color", "#0000ff");
	});

//Write black/white functionality here

$("#blackWhite").click(
	function(){
		$(".pixel").css("background-color", "#000000");
		$(".mouseOver").css("background-color", "#ffffff");
	});

>>>>>>> 4f6194f35694082447f8bfaa40d527e82d844bbc
});