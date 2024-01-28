$(document).ready(function() {
  let tweetAreaVisible = false;
  const $newTweet = $('.new-tweet');

  $newTweet.hide(); // Hide the new-tweet element initially

  $('.nav-content-right').click(function() {
    if (!tweetAreaVisible) {
      // If the tweet area is not visible, slide it down
      $newTweet.slideDown('fast', function() {
        // Enable textarea after the animation completes
        $('#tweet-text').prop('disabled', function(i, value) {
          return !value;
        });

        // Focus on the textarea after sliding down
        if (!$('#tweet-text').prop('disabled')) {
          $('#tweet-text').focus();
        }
      });

      tweetAreaVisible = true;
    } else {
      // If the tweet area is visible, slide it up
      $newTweet.slideUp('fast', function() {
        // Disable textarea after the animation completes
        $('#tweet-text').prop('disabled', function(i, value) {
          return !value;
        });
      });

      tweetAreaVisible = false;
    }
  });
});


