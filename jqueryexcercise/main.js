$(".dark-btn").click(function(){
  $(".box").toggleClass("dark");
   $("body").toggleClass("dark");
});

$(".draggable").draggable({
    snap:true,
    containment:".container",
    scroll: false,
    stack: ".draggable"
});