//window.location.reload()

$(".draggable").draggable({
    snap:true,
    containment:".item1 .item2",
    scroll: false,
    stack: ".draggable"
});