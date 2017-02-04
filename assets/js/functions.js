$(function(){
     //Close mobile nav on link click
     var navMobile = $(".navbar-collapse");

     navMobile.on("click", "a", null, function () {
         navMobile.collapse('hide');
     })

     //Sequentially fade in portfolio images on scroll
     var waypoint = $('#portfolio').waypoint(function(direction) {
       $('#fds img').each(function(i) {
         $(this).delay((i++) * 300).fadeTo(1000, 1); });
     }, {
       offset: '50%'
     })

     //Tooltips for link titles
     $('a').tooltip({placement: 'top'})
});

//Smooth scrolling
$(".navbar-smooth li a[href^='#']").on('click', function(event) {
  var target;
  target = this.hash;

  event.preventDefault();

  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 700, function() {
    return window.history.pushState(null, null, target);
  });
});
