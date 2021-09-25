$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    const tweetLength = this.value.length
    let tweetForm = $(this).closest('form'); // move out of 'this', i.e., #tweet-text to search the DOM Tree using 'closest' to find 'form' DOM Node
    let tweetCounter = tweetForm.find('.tweet-counter'); // from the form DOM Node use 'find' to locate '.tweet-counter'

    if (tweetLength < 140) {
      tweetCounter.html(140 - tweetLength).css("color", "#585858") // .html to access and alter the value found and stored in 'tweetCounter'
    } else {
      tweetCounter.html(140 - tweetLength).css("color", "red")
    };
  }); 
});