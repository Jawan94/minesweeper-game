
$( document ).ready(function() {
  $("#createBoard").click(function(){
    console.log('hit');
    var width = $('#width').find(":selected").val();
    var height = $('#height').find(":selected").val();
    var boms = $('#bom').find(":selected").val();
    var board = [];
    for(var i =0; i < height; i++){
      board.push([]);
      for(var j=0; j < width; j++){
        board[i].push("")
      }
    }
    var counter =0;
    while(counter < boms){
      var rWidth = Math.floor(Math.random() * width)
      var rHeight = Math.floor(Math.random() * height);
      if(board[rHeight][rWidth] === ""){
        board[rHeight][rWidth] = "B";
        counter++
      }else{
        console.log('else statement to avoid loop');
      }
    }
    console.log(board);
  var outerBoard = $('.outerBoard');
  for(var a = 0; a < height; a++){
    var row = $( `<div id="row${a}" class="row"></div>` )
    for(var b =0; b < width; b++){
      if(board[a][b] !== ""){
        var square = $(`<div id="${a}:${b}" class="square" bomb=${board[a][b]} checked = false>B</div>`)
      }else{
        var square = $(`<div id="${a}:${b}" class="square" bomb= "A" checked = false></div>`)
      }
      //var innerDiv = $("outerDiv").append("<div id= 'inner'> " +  " </div>")
      row.append(square)
    }
    outerBoard.append(row);
  }

});
var stack = [];
$(".outerBoard").click(function(e){
  var test1 = $(e.target).attr("bomb")
  if(test1 === "B"){
    console.log('Game Over!');
    alert('you stepped on a mine, you lost!')
  }else{
    // console.log('nope', test1);
    // console.log(e.target);
    var cords = e.target.id;
    var row = cords[0];
    var column = cords[2];
    console.log(row, column);


  }

});


});
