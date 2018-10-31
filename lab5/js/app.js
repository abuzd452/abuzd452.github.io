$ ('.nav-item').click(function() {
// alert('you clicked me');
// $('.content').addClass('green');
// console.log(button_name);
var button = $(this).data('button');

$('.about-text').removeClass('hide');
$('.nav-item').removeClass('active');
$('.content').attr('class', 'column conntent');
$(this).addClass('active');
$( '.content').addClass(button_name);



if(button_name == 'beyonce') {
  $('.slay').removeClass('hide');
  $('audio')[0].play();
  } else if (button_name == 'about') {
  $('.about-text').removeClass('hide');
}



});
$('.close').click(function() {
  $('.slay').addClass('hide');
  $('audio')[0].pause();
  $('.nav-item').removeClass('active');
});


