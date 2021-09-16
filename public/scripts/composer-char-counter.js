$(document).ready(function () {


  $("#tweet-text").on("input", function (event) {
    const tweetLength = this.value.length
    // const maxTweet = 10
  
    let tweetForm = $(this).closest('form');
    let tweetCounter = tweetForm.find('.tweet-counter')

    if (tweetLength < 140) {
      tweetCounter.html(140 - tweetLength).css("color", "#585858")
    } else {
      tweetCounter.html(140 - tweetLength).css("color", "red")
    }


    // console.log(tweetForm, 'mentor pt1')
    // console.log(tweetCounter, 'mentor pt2')
    // console.log($(this).find(".tweet-counter"), 'rck');
    
    // if (tweetLength < maxTweet) {
    //   console.log(tweetLength)
    // } else {
    //   console.log("-" + tweetLength)
    // }
  })
  








});