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
        $("#holder").append('<div id ="red" class="block"><p class="hide">'+r+c+'</p></div>');
      } else if (a[r][c] === 0) {
        $("#holder").append('<div id="grey" class="block"><p class="hide">'+r+c+'</p></div>');
      }
    }
  }
}

function darken(r,c){
  var darkenCoords = [];
  var minR = r;
  var minC = c;
  var maxR = r;
  var maxC = c;

  if(r > 0 && r < a.length){
    minR--;
  }
  if(c > 0 && c < a[0].length){
    minC--;
  }
  if(c < a[0].length-1){
    maxC++;
  }
  if(r < a.length-1){
    maxR++;
  }

  for(var i = minR; i <= maxR; i++){
    for(var j = minC; j <= maxC; j++){
      darkenCoords.push(""+i+j);
    }
  }
  //console.log(darkenCoords);

  $("#holder > .block").each(function(){
    if(darkenCoords.indexOf($(this).text()) > -1){
      var color = $(this).css("background-color");
      var splitColor = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(/,\s*/);
      var redVal= parseInt(splitColor[0]);
      var grnVal= parseInt(splitColor[1]);
      var bluVal= parseInt(splitColor[2]);
      var newRed= Math.floor(Math.random() * (255-redVal+1)) + redVal;
      console.log(redVal);
      console.log(newRed);
      $(this).css("background-color", "rgb("+newRed+"," + grnVal + "," + bluVal + ")");
    }
  });




}

$(document).ready(function(){
  makeMap();
  $(".block").click(function(){
    var coords = $(this).text();
    var row = parseInt(coords.substring(0,1));
    var col = parseInt(coords.substring(1));
    darken(row,col);
  });
});
