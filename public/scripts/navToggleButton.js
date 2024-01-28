$(document).ready(function() {
  let tweetAreaVisible = false;
  const $newTweet = $('.new-tweet');
  const $arrows = $('.arrows');

  $newTweet.hide();

  $('.nav-content-right').click(function() {
    if (!tweetAreaVisible) {
      $newTweet.slideDown('fast', function() {
        $('#tweet-text').prop('disabled', false).focus();
        $arrows.addClass('rotate');
      });

      tweetAreaVisible = true;
    } else {
      $newTweet.slideUp('fast', function() {
        $('#tweet-text').prop('disabled', false);
        $arrows.removeClass('rotate');
      });

      tweetAreaVisible = false;
    }
  });
});


