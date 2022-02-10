$('document').ready(function () {
    $('#item1').click(function() {
        var obj = document.createElement('audio');
        obj.src = 'suprastart.mp3'; 
        obj.play();
      });


    $('#item2').click(function() {
        var obj = document.createElement('audio');
        obj.src = 'supra.mp3'; 
        obj.play();
      });
  
});