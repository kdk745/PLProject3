$(document).ready(function(){
$("a").click(function(){
		var prev = $(this).prev();
		if (prev.attr("class") == "hide"){
			prev.attr("class","show");
	
			$(this).text("Show less");
		}
		else {
			prev.attr("class","hide");
			$(this).text("Show more");
		}
	});
});

