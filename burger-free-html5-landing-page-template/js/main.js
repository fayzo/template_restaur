"use strict";
jQuery(document).ready(function ($) {

//for Preloader

    $(window).on('load', function () {


        $("#loading").fadeOut(500);

	// $("#loading-center-absolute").fadeOut();
        // $("#loading").delay(200).fadeOut("slow");
    });



// scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });





    //End
});