(function($){
  $(function(){

    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.button-collapse').sideNav();
    $('body').removeClass('fade-out');
    


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

          $('#back-to-top').tooltip('show');
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

      $('#back-to-top').tooltip('show');

      // Show sideNav
      $('.button-collapse').sideNav('show');
      // Hide sideNav
      $('.button-collapse').sideNav('hide');
      // Destroy sideNav
      $('.button-collapse').sideNav('destroy');



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
