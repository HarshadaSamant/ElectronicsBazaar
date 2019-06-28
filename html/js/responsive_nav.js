
/* only execute this script when the document is ready */
$(document).ready(function(){
  /* function called when you click of the button */
  $("#menu-icon").click(function(){
          
    /* this function toggle the visibility of our "li" elements */
    $(".menu").toggle();
    var element = document.getElementById("deals");
   	element.classList.add("hide");
  });

  $("#close").click(function(){
    $(".menu").toggle();
  });  

  $("#link_icon").click(function(){
   /* this function toggle the visibility of our "li" elements */
    $(".link_nav").toggle();    
  });  
});

