$(function(){
     var navMobile = $(".navbar-collapse");

     navMobile.on("click", "a", null, function () {
         navMobile.collapse('hide');
     });
});
