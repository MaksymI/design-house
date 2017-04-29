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
   

    setTimeout(function() {

            $(".main_load").addClass("fadeOutRight animated");

        }, 3000);
   
    // $(".grid_item").mouseover(function() {
    //     $("p", this).toggleClass("shake animated");
    // });

    // $(".grid_item>p").mouseover(function() {
    //     $(this).toggleClass("pulse animated");
    // });

    /*-------menu+sandwich----------*/
    $(".toggle_mnu, .top_mnu ul a").click(function() {
        $(".sandwich").toggleClass("active");
    });

     $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
    }).append("<span>");

    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_mnu").fadeIn(600);
             $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

});

$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
