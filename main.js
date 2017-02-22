// Smooth scrolling between anchor tags
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function checkScroll() {
  var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $('.navbar').addClass('scrolled');
    // $('.navbar').css({
    //   'background-color': 'red'
    // });
  } else {
    $('.navbar').removeClass('scrolled');
  }
}

if ($('.navbar').length > 0) {
  $(window).on('scroll load resize', function() {
    checkScroll();
  });
}