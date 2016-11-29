$(document).ready(function(){
	

	$(".fotoUno").click(function(){
	    $(this).css('background','pink');
	});

	$("#search").focus(function(){
	    $(this).css('background','#C55355');
	});

	$("input").blur(function(){
	    $(this).css('background','gold');
	});

});