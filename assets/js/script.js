$(document).ready(function () {

  $('.main-wrapper').on('load scroll', function () {
    var scrolled = $(this).scrollTop();
    $('#headerVideo').css('transform', 'translate3d(0, ' + (scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
  });

  /*$("body").niceScroll({
    scrollspeed: 50,
  });*/

    $('.main-wrapper').on('load scroll', function () {
        var scrolledUp = $(this).scrollTop();
        var headerVideo = $('.header-video ').height();
        console.log(scrolledUp, headerVideo);
        if (scrolledUp >= headerVideo) {
            $("#videoBottom").addClass('video-bottom_fixed');
        } else {
            $("#videoBottom").removeClass('video-bottom_fixed');
        }
    });

});
