$(document).ready(function(){
  $("#sun").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#container2").offset().top
    }, 1500);
});
});