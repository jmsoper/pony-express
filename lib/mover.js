$(document).ready(function(){
  $(document).keydown(function(e) {
    var $horse = $('#horse');
    switch (e.which) {
    case 37:
      $horse.css('left', $horse.offset().left - 10); //left arrow key
        break;
    case 38:
      $horse.css('top', $horse.offset().top - 10);
        break;
    case 39:
      $horse.css('left', $horse.offset().left + 10);
        break;
    case 40:
      $horse.css('top', $horse.offset().top + 10);
        break;
    }
  })
});
