
$('body').scrollspy({ target: '#navbar-main', offset: 140})
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
$("#scroll-nav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top-100
     }, 800, function(){
     });
window.location.hash = hash;
});
 $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('hide');
      });