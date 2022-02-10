$(document).ready(function(){
  $("#sun").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#container2").offset().top
    }, 1500);
});

$('#sun').click(function() {
  var obj = document.createElement('audio');
  obj.src = 'DejaVu.mp3'; 
  obj.play();
});
});