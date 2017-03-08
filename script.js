$(document).ready(function(){

	var table = $('<table></table>');
	$('#box').append(table)

	var rowNum = 16;
	for (var x = 0; x < rowNum; x++) {

		var row = $('<tr></tr>');
		$(table).append(row);

		var colNum = 16;
		for (var i = 0; i < colNum; i++) {
			var block = $("<div></div>");
			$(row).append(block);
		};
	};
	

	$("tr > div").hover(
		function() {
			$(this).addClass("mouseOver");
		});

	$("button").click(
		function() {
			var reset = prompt("How many squares would you like?");
			$("tr > div").removeClass("mouseOver");
			rowNum = reset;
			colNum = reset;
		})
});