function getQuote() {
	$.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?',
		function(data) {
			var quoteContent = data[0].content;
			var quoteAuthor = data[0].title;

			$('.quote').html('<i class="fa fa-quote-left" aria-hidden="true"></i>' + quoteContent);
			$('.author').text("- " + quoteAuthor);
	})
};


$(document).ready(function() {
	getQuote();
	$('#newQuote').on('click', function() {
		getQuote();
	})
})
