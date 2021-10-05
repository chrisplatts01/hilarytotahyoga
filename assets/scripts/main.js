$(function() {

$(".jump-menu a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $('html,body').animate({scrollTop: $(target).offset().top},'slow');
});

$("h2").on("click", function () {
    $('html,body').animate({scrollTop: 0},'slow');
});


});
