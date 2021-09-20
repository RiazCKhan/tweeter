// $(document).ready(function () {
  // $(".tweet-container").hover(function () {
  //   alert($this)
  //   $(this).css('box-shadow', '5px 5px 1px rgb(0 0 0 / 0.2')
  // }, function () {
  //   $(this).css('box-shadow', '0px 0px 0px rgb(0 0 0 / 0')
  // });

  // $(".fas.fa-flag").hover(function () {
  //   alert('msg')
  //   $(this).css('color', '#069B1E')
  // }, function () {
  //   $(this).css('color', '#585858')
  // });

  // $(".fas.fa-heart").hover(function () {
  //   $(this).css('color', '#9B0606')
  // }, function () {
  //   $(this).css('color', '#585858')
  // });

  // $(".fas.fa-retweet").hover(function () {
  //   $(this).css('color', '#DED600')
  // }, function () {
  //   $(this).css('color', '#585858')
  // });
// });

$(document).on("mouseenter", ".tweet-container", function(){
  $(this).css('box-shadow', '5px 5px 1px rgb(0 0 0 / 0.2')
});
$(document).on("mouseleave", ".tweet-container", function(){
  $(this).css('box-shadow', '0px 0px 0px rgb(0 0 0 / 0')
});

$(document).on("mouseenter", ".fas.fa-flag", function(){
  $(this).css('color', '#069B1E')
});
$(document).on("mouseleave", ".fas.fa-flag", function(){
  $(this).css('color', '#585858')
});

$(document).on("mouseenter", ".fas.fa-heart", function(){
  $(this).css('color', '#9B0606')
});
$(document).on("mouseleave", ".fas.fa-heart", function(){
  $(this).css('color', '#585858')
});

$(document).on("mouseenter", ".fas.fa-retweet", function(){
  $(this).css('color', '#DED600')
});
$(document).on("mouseleave", ".fas.fa-retweet", function(){
  $(this).css('color', '#585858')
});

