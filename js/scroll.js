$(document).ready(function(){
	$("#clickHome").click(function()
	{
		 $('html, body').animate({
	        scrollTop: $('#home').offset().top
	    }, 2000);

	});
	$("#clickAbout").click(function()
	{
		 $('html, body').animate({
	        scrollTop: $('#about').offset().top
	    }, 2000);

	});
	$("#clickServices").click(function()
	{
		 $('html, body').animate({
	        scrollTop: $('#services').offset().top
	    }, 2000);

	});
});