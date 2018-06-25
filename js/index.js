$(document).ready(function() {
	var Qt="";
	var At="";
	getQuote();
  function getQuote() {
    var url=
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
		 Qt = data.quoteText;
		 At = data.quoteAuthor;
      $("#quote").html(Qt);
      $("#author").html('- ' + At);
    });
  }
	
  $("#tweet-quote").on("click", tweet);
	function tweet(){
		var tweetQt = Qt;
		var tweetAt = At;
		var url = "https://twitter.com/intent/tweet?text=" + tweetQt + " -" + tweetAt;
			window.open(url, "_blank");
	};

  $("#new-quote").on("click", function() {
    getQuote();
  });
});
