var a = [
              [1,1,1,0,1],
              [1,0,0,0,0],
              [1,0,1,1,1],
            ];

function makeMap(){
  $("#holder").css("width", a[0].length*50+a[0].length+5);
  $("#holder").css("height", a.length*50+a.length+5);
  for(var r = 0; r < a.length; r++){
    var aa = a[r];
    for(var c = 0; c < aa.length; c++){
      if(a[r][c] === 1){
        $("#holder").append('<div id ="red"></div>');
      } else if (a[r][c] === 0) {
        $("#holder").append('<div id="grey"></div>');
      }
    }
  }
}

$(document).ready(function(){
  makeMap();
});
