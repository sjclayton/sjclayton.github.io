$(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
});

$(function(){
     var navMobile = $(".navbar-collapse");

     navMobile.on("click", "a", null, function () {
         navMobile.collapse('hide');
     });
});
