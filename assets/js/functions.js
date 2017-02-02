$(function(){
     var navMobile = $(".navbar-collapse");

     navMobile.on("click", "a", null, function () {
         navMobile.collapse('hide');
     });
});

$(".navbar-smooth li a[href^='#']").on('click', function(event) {
  var target;
  target = this.hash;

  event.preventDefault();

  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 500, function() {
    return window.history.pushState(null, null, target);
  });
});
