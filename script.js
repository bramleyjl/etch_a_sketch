$(document).ready(function(){

var rowNum = 40;
var box = 960;

$("#box").css("height", box + "px");
$("#box").css("width", box + "px");

var table = $('<table></table>');
	$('#box').append(table);

var gridMaker = function() {
	for (var x = 0; x < rowNum; x++) {

		var row = $('<tr></tr>');
		$(table).append(row);

		for (var j = 0; j < rowNum; j++) {
			var block = $('<div class="pixel"></div>');
			$(row).append(block);
		};	
		
	};
	};

var pixSize = function() {
	$(".pixel").css("height", box / rowNum + "px");
	$(".pixel").css("width", box / rowNum + "px");
	}

gridMaker(rowNum);
pixSize(rowNum);

$(".pixel").hover(
	function() {
	$(this).addClass("mouseOver");
	});

//Reset switch

$("#clear").click(function() {
		$("tr").remove();
		gridMaker(rowNum);
		pixSize(rowNum);

		$(".pixel").hover(function() {
		$(this).addClass("mouseOver");
		});
	});


//Change resolution and reset switch

$("#resolution").click(function() {
		rowNum = prompt("How many squares would you like? (Choose between 9-99)");
			
		if(isNaN(rowNum) === true) {
			alert("Please choose a real number!")
			return;
		}

		else if(rowNum < 9) {
			alert("Please choose a larger number.")
			return;
		}

		else if(rowNum > 99) {
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

//Color switch

function RandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
	};

$("#colors").click(function(){
		$(".mouseOver").each(function() {
			$(this).css("background-color", RandomColor());
			});
		$(".pixel").hover(function() {
		$(this).css("background-color", RandomColor() );
		});
	});

//Black/white switch

$("#blackWhite").click(function(){
		$(".mouseOver").css("background-color", "#ffffff");

		$(".pixel").hover(function() {
		$(this).css("background-color", "#ffffff");
		});
	});

});