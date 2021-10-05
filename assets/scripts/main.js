$(function() {

/**
 * Build jump menu
 */
var $articleHeadings = $('#content').find('h2');

if ($articleHeadings.length > 0) {
    var $jumpMenuWrapper = $('#jumpMenu').find('.wrapper');
    $jumpMenuWrapper.append('<ul id="jumpMenuItems" class="menu-items"></ul');

    $articleHeadings.each(function () {
        var $this = $(this);
        var menuItemText = $this.text();
        var menuItemLink = menuItemText.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');;
        var menuItemHtml = '<li class="menu-item"><a href=" #' + menuItemLink + '">' + menuItemText + '</a></li>';

        // Add id attribute to each heading
        $this.attr('id', menuItemLink)

        // Add menu item
        $('#jumpMenuItems').append(menuItemHtml);
    });
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
