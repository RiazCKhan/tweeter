$(document).ready(function() {
  
  $("#error-one").hide()
  $("#error-two").hide()

  $("form").submit(function(event) {
    event.preventDefault();
    const $form = $(this);
    const $tweetCounter = $form.find('.tweet-counter')
    const $input = $form.find("#tweet-text").serialize();
    const $tweetLength = $form.find('#tweet-text').val().length;      
    const $errorOne = $form.find("#error-one")
    const $errorTwo = $form.find("#error-two")
    const $tweetButton = $form.find(".tweet-button")

if (!$tweetLength) {
  $errorOne.slideDown("slow")
  return false
}
if ($tweetLength > 140) {
  $errorTwo.slideDown("slow", function(){
    $tweetCounter.css("color", "#585858")
    $tweetCounter.html(140)
  })
  return false
}
if ($tweetLength) {
  $errorOne.slideUp(600)
  $errorTwo.slideUp(600)
}

    $.ajax({
      url: "/tweets/",
      type: "POST",
      data: $input
    }).done(function() {
      loadTweets()
    });

    $("form")[0].reset();
    $tweetCounter.html(140)
  });

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const loadTweets = function() {
    $.ajax("/tweets/", { method: 'GET', dataType: "json" })
      .then(function(tweets) {
        renderTweets(tweets);
      });
  };
  loadTweets();

  const renderTweets = function(tweets) {
    $('#all-tweet-container').empty();
    tweets.forEach(tweet => {
      $('#all-tweet-container').prepend(createTweetElement(tweet));
    });
  };

  const createTweetElement = function(tweet) {

    const $tweet = `
  <article class="tweet-container">
  <header>
    <div class="profile-user">
      <img class="profile-img" src=${escape(tweet.user.avatars)}> 
      <div>${escape(tweet.user.name)}</div>
    </div>
    <div class="at-user">
      ${escape(tweet.user.handle)}
    </div>
  </header>
    <blockquote>
      ${escape(tweet.content.text)}
    </blockquote>
  <footer>
    <div class="post-time">
    ${timeago.format(escape(tweet.created_at))}
    </div>
    <div>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
  </article>`;

    return $tweet;
    
  };
});




