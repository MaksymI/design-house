$(function() {

    // $(".main_load").mousemove(function() {
    //     setTimeout(function() {
    //     if ($(".main_load").is(":visible")) {
    //         $(".iner_main_load").addClass("fadeOutRight animated");
    //         $("#logo").addClass("lightSpeedOut animated");
    //         $("#my-footer-load").addClass("fadeOutRight animated");
    //         };
    //     }, 850);
    // });
    // $(".main_load").mousemove(function() {
    //     setTimeout(function() {
    //         if ($(".main_load").is(":visible")) {
    //             $(".main_load").addClass("fadeOutRight animated");
    //         }
    //     }, 300);
    // });

    setTimeout(function() {

            $(".main_load").addClass("fadeOutRight animated");

        }, 3000);
   
    // $(".grid_item").mouseover(function() {
    //     $("p", this).toggleClass("shake animated");
    // });

    $(".grid_item>p").mouseover(function() {
        $(this).toggleClass("pulse animated");
    });

    // $(".grid_item").mouseleave(function() {
    //     $("p", this).removeClass("slideOutUp animated");
    //     $("p", this).addClass("slideInDown animated");
    // });

    // $(".grid_item").mouseleave(function() {
    //     $("p", this).replaceWith("<p class='slideInDown animated'>Design House</p>");
    // });
    // $(".grid_item").mouseleave(function() {
    //     setTimeout(function() {

    //         $(".grid_item>p").addClass("slideInDown animated");

    //     }, 200);
    // });

});

$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
