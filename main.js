$('.name').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',  function(e) {
  console.log('hello');
    $('.logo').removeClass('drop').addClass('fade');
});
