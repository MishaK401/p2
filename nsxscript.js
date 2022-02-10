$('document').ready(function () {
    $('#item1').click(function() {
        var obj = document.createElement('audio');
        obj.src = 'nsxstart.mp3'; 
        obj.play();
      });


    $('#item2').click(function() {
        var obj = document.createElement('audio');
        obj.src = 'nsxrace.mp3'; 
        obj.play();
      });
  
});