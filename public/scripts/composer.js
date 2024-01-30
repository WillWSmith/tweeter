$(document).ready(function() {
  // Show/hide scroll-to-top button on scroll
  function toggleScrollToTopButton() {
    if ($(this).scrollTop() > 100) {
      $('#scroll-to-top-button').fadeIn();
    } else {
      $('#scroll-to-top-button').fadeOut();
    }
  }

  toggleScrollToTopButton();

  $(window).scroll(toggleScrollToTopButton);

  // Scroll to the top and enable textarea on scroll-to-top button click
  $('#scroll-to-top-button').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'fast', function() {
      $('#tweet-text').prop('disabled', false).focus();
    });
  });
});

$(document).ready(function() {
  //Update tweet counter on input
  $(".new-tweet form textarea").on("input", function() {
    let textLength = $(this).val().length;
    let maxChars = 140;
    let remainingChars = maxChars - textLength;

    $(".new-tweet form .counter").text(remainingChars);

    if (remainingChars < 0) {
      $(".new-tweet form .counter").css("color", "red");
    } else {
      $(".new-tweet form .counter").css("color", "");
    }

  });
});