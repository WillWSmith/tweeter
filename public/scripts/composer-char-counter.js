$(document).ready(function() {
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