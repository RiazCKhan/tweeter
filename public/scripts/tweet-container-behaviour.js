$(document).ready(function () {

$(".tweet-container").hover(function() {
  console.log('i see')
  $(this).css('box-shadow', '5px 5px 1px rgb(0 0 0 / 0.2')
}, function () {
  $(this).css('box-shadow', '0px 0px 0px rgb(0 0 0 / 0')
});




});



$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});