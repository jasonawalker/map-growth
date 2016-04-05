var a = [
              [1,1,1,0,1],
              [1,0,0,0,0],
              [1,0,1,1,1],
            ];

function growth(){
  for(var r = 0; r < a.length; r++){
    var aa = a[r];
    for(var c = 0; c < aa.length; c++){
      if(a[r][c] === 1){
        console.log(1);
        $(".holder").append('<div id ="red" class="inline"></div>');
      } else if (a[r][c] === 0) {
        console.log(0);
        $(".holder").append('<div id="grey" class="inline"></div>');
      }
    }
  }
}

$(document).ready(function(){
  growth();
});
