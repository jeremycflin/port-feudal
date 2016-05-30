
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $("body").addClass("mobile");
  $(".story_intro").removeClass("container");
  // $(".img1").css("display", "none"); 
  // $(".quotes").css("margin-top", "46%"); 
  $(".mobile-fix").removeClass("col-sm-6");
  $(".mobile-fix").removeClass("col-sm-offset-3");
  $(".mobile-fix").removeClass("col-sm-offset-0");

    // $(".mobile-fix").removeClass("col-sm-offset-2");
  $(".mobile-fix").addClass("col-sm-12");
  // $(".mobile-hide").css("display", "none"); 
  $(".removeContainer").removeClass("container");
  // $("#main-header").css("top", "660px");

}else{
  jQuery(document).ready(function($){
  $(window).on("load resize", function(){ 
    var s = skrollr.init();})
});
}


jQuery(document).ready(function($){
    $('.lazy').laziestloader();
    
    $("#header-container").width($(window).width()); 
    
    $("#header-container").height($(window).height()); 
    
    $('.audio').jabradoodle();
    
    $(window).on("load resize", function(){ 
        $("#header-container").height($(window).height());
        $("#header-container").width($(window).width()); 
        // var s = skrollr.init();
});  
    
$(function(){
      $("#second_quote").typed({
        strings: ['“I finally felt like I wasn’t poor anymore”'],
        typeSpeed: 10,
        loop: true
      });
  });

$(function(){
      $("#first_quote").typed({
        strings: ['“I’m renting. But my dream is to own a home for my kids.”'],
        typeSpeed: 10,
        loop: true
      });
  });
$(function(){
      $("#thrid_quote").typed({
        strings: ['“If we leave now, we will lose everything.”'],
        typeSpeed: 10,
        loop: true
      });
  });



// ugliest hack in history right here.
  window.setTimeout(function(){
    $("body").removeAttr("style");
  }, 500);
});
