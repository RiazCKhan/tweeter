$(document).ready(function () {


  $("form").submit(function (event) {
    event.preventDefault();
    const $form = $(this)
    const $inputText = $form.find("#tweet-text").serialize()
    $.post("/tweets/", $inputText)
  });


  const loadTweets = function () {
    $.ajax("/tweets/", {method: 'GET'})
    .then(function (tweets) {
      renderTweets(tweets)
    })
  }
loadTweets()


// ------- Hard coded users removed with the implementation of the ajax GET request
  // const tweetData = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "The Original User",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@TOU"
  //     },
  //     "content": {
  //       "text": "I came, I saw, I conquered"
  //     },
  //     "created_at": 1461113959088
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd"
  //     },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ];

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

  // ------- Phase out with the implementation of the GET request + append
  // const $newTweet = renderTweets(tweetData);
  // $('#all-tweet-container').append($newTweet); // --> Moved to renderTweet function
});