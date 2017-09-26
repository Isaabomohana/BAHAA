(function($){
  $(function(){

    $('.carousel').carousel();
    $('.parallax').parallax();

    $('body').removeClass('fade-out');
    $('.slider').slider();

    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
           $('#back-to-top').fadeIn();
       } else {
           $('#back-to-top').fadeOut();
       }
     });

       // scroll body to 0px on click
       $('#back-to-top').click(function () {
           $('#back-to-top').tooltip('hide');
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });
     });

     $('a[href*="#"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html, body').stop().animate({
             scrollTop: target.offset().top
           }, 1000);
           return false;
         }

     };

     $('.dropdown-button').dropdown({
       inDuration: 500,
       outDuration: 500,
           hover: false, // Activate on hover
           gutter: 93, // Spacing from edge
           belowOrigin: false, // Displays dropdown below the button
           alignment: 'right', // Displays dropdown with edge aligned to the left of button
           stopPropagation: false // Stops event propagation
         });

        // scroll body to 0px on click
        $('#back-to-top').click(function () {
          $('#back-to-top').tooltip('hide');
          $('body,html').animate({
            scrollTop: 0
          }, 800);
          return false;
        });
  }); // end of document ready
})(jQuery); // end of jQuery name space

jQuery(document).ready(function() {
  jQuery('.post2').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
      offset: 100
     });
 jQuery('.post').addClass("hidden").viewportChecker({
     classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
     offset: 100
    });
});
$( document ).ready(function(){
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
})
