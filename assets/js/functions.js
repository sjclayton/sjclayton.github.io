$(function(){
     //Preloader
     $(window).on('load', function() {
       $('#loading').delay(1000).hide(function (){
         $('.navbar-default').css('display', 'inline');
         $('.navbar-default').addClass('animated fadeInDown');
         $('#start').addClass('animated fadeIn');
       });
     })

     //Close mobile nav on link click
     var navMobile = $('.navbar-collapse');

     navMobile.on('click', 'a', null, function () {
         navMobile.collapse('hide');
     })


     //Fix navbar hover bug (hacky)
     $('a.navbar-brand').hover(function () {
       $(this).css( 'color', '#05e707');
       $('a.navbar-brand').mouseleave(function () {
         $(this).css( 'color', 'white');
       })
     })
     $('.navbar-nav li a').hover(function () {
       $(this).toggleClass('hvr-pulse');
       $(this).css( 'color', '#05e707');
       $('.navbar-nav li a').mouseleave(function () {
         $(this).css( 'color', 'white');
       })
     })

     //Start block animations
     $('#first').delay(3000).fadeTo(1000, 1)
     $('#middle').delay(3500).fadeTo(1000, 1)
     $('#last').delay(4000).fadeTo(1000, 1)
     $('#subheader').delay(5000).fadeTo(1000, 1)


     //Fade sections in as visible
     var aboutWaypoint = $('#about').waypoint(function(direction) {
       $('#about').addClass('animated fadeInLeft');
     } , {
       offset: '40%'
     })

     var skillsWaypoint = $('#skills').waypoint(function(direction) {
       $('#skills').addClass('animated fadeInRight');
     } , {
       offset: '75%'
     })

     var portfolioWaypoint = $('#portfolio').waypoint(function(direction) {
       $('#portfolio').addClass('animated fadeInLeft');
     }, {
       offset: '75%'
     })

     var socialWaypoint = $('#social').waypoint(function(direction) {
       $('#social').addClass('animated fadeInRight');
     }, {
       offset: '75%'
     })

     var contactWaypoint = $('#contact').waypoint(function(direction) {
       $('#contact').addClass('animated fadeInLeft');
     }, {
       offset: '75%'
     })

     //Equal height wells
     $('.well').matchHeight();
});

//Smooth scrolling
$(".navbar-smooth a[href^='#']").on('click', function(event) {
  var target = this.hash;

  event.preventDefault();

  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 700, function() {
    return window.history.pushState(null, null, target);
  });
});
