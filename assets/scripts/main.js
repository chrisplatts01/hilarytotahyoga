$(function() {

/**
 * Build jump menu
 */
var $article-h2 = $('#content').find('.article-body').find('h2');
if ($article-h2) {
    consiole.log($article-h2);
}

/**
 * Handle jump menu clicks: Disable default action and scroll slowly to target
 */
$(".jump-menu a").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $('html,body').animate({scrollTop: $(target).offset().top},'slow');
});

/**
 * Handle H2 'Back to top' click
 */
$("h2").on("click", function () {
    $('html,body').animate({scrollTop: 0},'slow');
});


});
