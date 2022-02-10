$('document').ready(function () {
    $('#item1').click(function() {
        var obj = document.createElement('audio');
        obj.src = 'rx7start.mp3'; 
        obj.play();
      });


    $('#item2').click(function() {
        var obj = document.createElement('audio');
        obj.src = '4rotor.mp3'; 
        obj.play();
      });
  
});