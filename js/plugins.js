$(document).ready(function() {

    //FAQ toggle click
    $(".faq-title").click(function() {
        $(this).toggleClass("open");
        $(this).next(".faq-content").toggleClass("open");
    });


    $(".toggle").click(function() {
        $(this).toggleClass("open");
        $(".topnav").toggle();
    });

    //Mega menu
    $(".topnav .has-child").click(function() {
        $(this).children(".toggle-mega").toggleClass("open");
        $(this).children(".megaMenu").toggle();
    });

    $(".retainer-table tr").each(function() {
        $faqTitle = $(this).find(".faq-title");
        $(this).find(".check-wrap").css({
            height: $faqTitle.outerHeight(),
        });
    });


});