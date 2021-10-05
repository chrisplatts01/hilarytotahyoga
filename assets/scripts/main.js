$(function() {

/**
 * Build jump menu
 */
var $articleHeadings = $('#content').find('.article-body h2');
console.log($articleHeadings);

if ($articleHeadings.length > 0) {
    var $jumpMenuWrapper = $('#jump-menu').find('.wrapper');
    $jumpMenuWrapper.append('<ul id="jump-menu-items" class="jump-menu_items"></ul');
    console.log($jumpMenuWrapper);

    $articleHeadings.each(function () {
        var $this = $(this);
        var menuItemText = $this.text();
        var menuItemLink = menuItemText.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');;
        var menuItemHtml = '<li class="menu-item"><a href=" #' + menuItemLink + '">' + menuItemText + '</a></li>';

        // Add id attribute to each heading
        $this.attr('id', menuItemLink)

        // Add menu item
        $('#jump-menu-items').append(menuItemHtml);
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
