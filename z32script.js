$('document').ready(function () {
    $('#item1').click(function() {
        var obj = document.createElement('audio');
        obj.src = 'z32start.mp3'; 
        obj.play();
      });


    $('#item2').click(function() {
        var obj = document.createElement('audio');
        obj.src = 'z32race.mp3'; 
        obj.play();
      });
  
});