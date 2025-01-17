$(document).ready(function() {
  
  $("#error").hide();

  $("form").submit(function(event) {
    event.preventDefault();
    const $form = $(this);
    const $tweetCounter = $form.find('.tweet-counter');
    const $input = $form.find("#tweet-text").serialize();
    const $tweetLength = $form.find('#tweet-text').val().length;
    const $error = $form.find("#error");

    if (!$tweetLength) {
      $error.text("Uh-oh... This tweet does not exist").slideDown("slow");
      return false;
    };
    if ($tweetLength > 140) {
      $error.text("This tweet is greater than 140 characters").slideDown("slow", function() {
        $tweetCounter.css("color", "#585858");
      });
      return false;
    };
    if ($tweetLength) {
      $error.slideUp("slow");
    };

    $.ajax({
      url: "/tweets/",
      type: "POST",
      data: $input
    }).done(function() {
      loadTweets();
    });

    $("form")[0].reset();
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