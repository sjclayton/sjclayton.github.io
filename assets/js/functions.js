$(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
});

$(function(){ 
     var navMain = $(".navbar-collapse");

     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });
