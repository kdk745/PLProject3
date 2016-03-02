$(document).ready(function(){
	$("a").each(function(){
		var url = $(this).attr("href");
		var caption = $(this).attr("title");
		var image = new Image();
		image.src = url;
		$(this).click(function(evt){
			$("#image").attr("src",url);
			$("#caption").html(caption);
			evt.preventDefault();
		});	
	});
	$("#image").attr("src",$("a").first().attr("href"));
	$("#caption").html($("a").first().attr("title"));
});