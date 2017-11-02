var turn = "a"


$('#reset').click(function(){
  $('#reset').removeClass( "x O")
})

$('td').click(function(){
  $('td').addClass("X")
})

$('td').click(function(){
  $('td').html("X")
})
