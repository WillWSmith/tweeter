/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
const renderTweets = function(tweets) {
  const $tweetsContainer = $('#tweets-container');
  $tweetsContainer.empty();

  tweets.reverse().forEach((tweet) => {
    const $tweet = createTweetElement(tweet);
    $tweetsContainer.prepend($tweet);
  });
};

const createTweetElement = function(tweet) {
  const formattedTimestamp = timeago.format(tweet.created_at);

  const escapedText = $('<div>').text(tweet.content.text).html();

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
        <p>${escapedText}</p>
      </div>
      <footer>
        <div class="footer-left">
          <span><i class="icon far fa-clock"></i> ${formattedTimestamp}</span>
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

renderTweets([]);

  $('#tweet-form').submit(function(event) {
    event.preventDefault();

    $('#error-message').slideUp();

    const tweetContent = $('#tweet-text').val();
    
    if (tweetContent.length === 0) {
      $('#error-message').text('Tweet cannot be empty!').slideDown();
      return;
    }

    if (tweetContent.length > 140) {
      $('#error-message').text('Tweet cannot be more than 140 characters!').slideDown();
      return;
    }

    console.log('Form submitted, performing AJAX call...');

    const tweetData = $(this).serialize();
    console.log(`Tweet Data:`, tweetData);

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: tweetData,
      success: function(response) {
        console.log('Success!', response);

        $('#tweet-text').val('');

        $('.counter').text('140');

        loadTweets();
      },
      error: function(error) {
        console.log('Error!', error);
      }
    });
  });

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function(response) {
        console.log('Success!', response);

        const reversedTweets = response.reverse();

        renderTweets(reversedTweets);
      },
      error: function(error) {
        console.log('Error!', error);
      }
    });
  }

  loadTweets();
});