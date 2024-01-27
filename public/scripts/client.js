/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
$(document).ready(function() {
const renderTweets = function(tweets) {
  const $tweetsContainer = $('#tweets-container');
  $tweetsContainer.empty();

  tweets.forEach((tweet) => {
    const $tweet = createTweetElement(tweet);
    $tweetsContainer.append($tweet);
  });
};

const createTweetElement = function(tweet) {
  let $tweet = $(`
    <article class="tweet">
      <header>
        <div class="left-section">
          <div class="content-left">
            <img src="${tweet.user.avatars}" alt="User Avatar">
          </div>
          <div class="user-info">
            <p class="tweet-username">${tweet.user.name}</p>
          </div>
        </div>
        <p class="user-account">${tweet.user.handle}</p>
      </header>
      <div class="content-mid">
        <p>${tweet.content.text}</p>
      </div>
      <footer>
        <div class="footer-left">
          <span><i class="icon far fa-clock"></i> ${tweet.created_at}</span>
        </div>
        <div class="footer-right">
          <i class="icon far fa-heart"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-regular fa-flag"></i>
        </div>
      </footer>
    </article>
  `);

  return $tweet;
};

renderTweets(data);

});

$(document).ready(function() {
  $('#tweet-form').submit(function(event) {
    event.preventDefault();
    
    console.log('Form submitted, performing AJAX call...');

    const tweetData = $(this).serialize();
    console.log(`Tweet Data:`, tweetData);

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: tweetData,
      success: function(response) {
        console.log('Success!', response);
      },
      error: function(error) {
        console.log('Error!', error);
      }
    });
  });
});
