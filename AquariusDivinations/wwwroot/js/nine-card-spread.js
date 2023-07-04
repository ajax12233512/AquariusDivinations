var cardImages = [
    "~/cardimgs/ace of cups.png",
    "~/cardimgs/ace of pentacles",
    // Add the paths for card3 to card9
];

$(document).ready(function () {
    $(".card").each(function (index) {
        var imagePath = cardImages[index];
        $(this).css("background-image", "url(" + imagePath + ")");
    });
});

