$(document).ready(function () {

  $("form").submit(function (event) {
    event.preventDefault();
    const $form = $(this)
    const $input = $form.find("#tweet-text").serialize()
    const $tweetLength =  $form.find('#tweet-text').val().length
    
   if ($tweetLength <= 140) {
     console.log('good')
    } else {
      console.log('bad')
    };

    $.post("/tweets/", $input)
  });

  const loadTweets = function () {
    $.ajax("/tweets/", { method: 'GET' })
      .then(function (tweets) {
        renderTweets(tweets)
      })
  }
  loadTweets()

  const renderTweets = function (tweets) {
    let $newTweet = '';
    tweets.forEach(tweet => {
      $newTweet += createTweetElement(tweet);
    });
    return $('#all-tweet-container').append($newTweet);
  };

  const createTweetElement = function (tweet) {
    const $tweet = `
  <article class="tweet-container">
  <header>
    <div class="profile-user">
      <img class="profile-img" src=${tweet.user.avatars}> 
      <div>${tweet.user.name}</div>
    </div>
    <div class="at-user">
      ${tweet.user.handle}
    </div>
  </header>
    <blockquote>
      ${tweet.content.text}
    </blockquote>
  <footer>
    <div class="post-time">
    ${timeago.format(tweet.created_at)}
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