$(document).ready(function() {
  // Show/hide scroll-to-top button on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scroll-to-top-button').fadeIn();
    } else {
      $('#scroll-to-top-button').fadeOut();
    }
  });

  // Scroll to the top and enable textarea on scroll-to-top button click
  $('#scroll-to-top-button').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'fast', function() {
      $('#tweet-text').prop('disabled', false).focus();
    });
  });
});