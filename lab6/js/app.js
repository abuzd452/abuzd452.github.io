
// $('.nav-item').click(function(){
//   var target = $(this).html();

//   console.log(target);
//   debugger;
//   if ($(target) == 'Apple') {
//     $('.apple').removeClass('hide');
//   } else if ($(target) == 'vogue') {
//     $('.vogue').removeClass('hide');
//   } else if ($(target) == 'disney') {
//       $('.disney').removeClass('hide');
//   } else if ($(target) == 'nike') {
//         $('.nike').removeClass('hide');}
// });

$ ('.nav-item').click(finction() {
var img = $(this).data('img');
var classname = $(this).data('classname');
var img_to_show = '<div class="logo ' + classname + '"><img src=' '+ img +   ></div>';
$('.content').prepend(img_to_show);


// console. log(target);

// $('.content').append(target);
// $('.content').append('<img src="assets/img/' + img + '" />');
});


