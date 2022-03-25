$(function () {

  $('.header__submit button').click(function () {
    $('.modals').fadeIn();
    $('html').addClass('modalset');
  });

  $('.sp__push').click(function () {
    $('.modals').fadeIn();
    $('html').addClass('modalset');
  });

  $('.modal__inner__close').click(function () {
    $('.modals').fadeOut();
    $('html').removeClass('modalset');
  });
  
  $('.modal__inner__push button').click(function () {
    $('.modal__inner1').fadeOut();
    setTimeout(function() {
      $('.modal__inner2').fadeIn();
    }, 500);
    setTimeout(function() {
      $('.modal__inner2').fadeOut();
      setTimeout(function() {
        $('.modal__inner3').fadeIn();
        $(document).click(function() {
          location.reload();
        })
      }, 500)
    }, 3000);
    
  });
});	