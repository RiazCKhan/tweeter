/*
 - Client-side JS logic goes here
 - jQuery is already loaded
 - Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

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
    ${tweet.created_at}
    </div>
    <div>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
  </article>`

  return $tweet
  
};

const $tweet = createTweetElement(tweetData);
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#all-tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


});