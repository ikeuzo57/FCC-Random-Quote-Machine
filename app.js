// Source Chris@cmwebby
// Random Color

/* global $*/

var colors = [
  {base:'#F59586', light:'#FFDBD6'},
  {base:'#B0BCC9', light:'#F9F9FA'},
  {base:'#6E6F71', light:'#B4B5B6'},
  {base:'#485868', light:'#86909B'},
  {base:'#F3C766', light:'#FFEABA'},
  {base:'#D0D1D3', light:'#FFFFFF'},
  {base:'#BCD5D0', light:'#FDFDFD'},
  {base:'#F8BF98', light:'#FFEDE0'},

];


$("document").ready(function(){
  $("#getMessage").on("click", function(){
    let randomColor = Math.floor(Math.random() * colors.length);
    $('body').css("background", colors[randomColor].base);
    $('.quote-container').css("background", colors[randomColor].light);
    $('.quote').css("color", colors[randomColor].base);
    $('.author').css("color", colors[randomColor].base);
    $('.btn').css("background", colors[randomColor].base);
    $('.btn').css("color", colors[randomColor].light);
    $('.message').css("background", colors[randomColor].light);
    $.getJSON("https://got-quotes.herokuapp.com/quotes", function(json){
      $(".message").html(json.quote + "<br> --" + json.character  );
    });
    
  });
});
//  Quote Api
$(document).ready(function(e){
	function getRandomQuote(){	$.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",function(data){
			$(".well").fadeOut(function(){
				$(".message").html(data.quoteText);
					
	
			});
		});
	}
// twitter Api
$(document).on("click","#tweet",function(){
		var tweetURL = "https://twitter.com/intent/tweet?text=" + $(".message").html() + $(".author").html() + "&hashtags=quotes";
		window.open(tweetURL,"_blank","width=400,height=400");
	});
});