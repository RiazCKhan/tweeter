$(document).ready(function () {


  $("#tweet-text").on("input", function (event) {
    const tweetLength = this.value.length
    const maxTweet = 10
  
    let tweetForm = $(this).closest('form');
    let tweetCounter = tweetForm.find('.tweet-counter')
    tweetCounter.html(140 - tweetLength);

    console.log($form, 'mentor')
    console.log($counter, 'mentor')
    console.log($(this).find(".tweet-counter"), 'rck');
    
    if (tweetLength < maxTweet) {
      console.log(tweetLength)
    } else {
      console.log("-" + tweetLength)
    }
  })
  
  
  
  
  // console.log($("counter", this))
  // j query selectors using 'this'










});