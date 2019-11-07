//  Changes the color when hovered over
$(function() {
    $('li').hover(function() {
        $(this).css("background-color", "#F4F4F4");
        $(this).css("border-color", "#F4F4F4");
    }, function() {
        $(this).css("background-color", "white");
        $(this).css("border-color", "white");
    });
});


//  Allows the cards to be moved
function cardSortable() {
    $(".card, .card").sortable({
        //  Tolerance: "pointer", makes moving the card more accurate
        tolerance: "pointer",
        //  Scroll: false, used so the card doesnt scroll off screen
        scroll: false,
        // Adds an animation for placing the card
        revert: (true, 250),
        opacity: 0.75,
        connectWith: ".cardSortable",
        placeholder: "ui-state-highlight",

        //  Makes the placeholder the same size as the card

        start: function(e, ui) {
            /*  The minus 4.30 makes it so that the placeholder doesnt move the
                other card
            */
            ui.placeholder.height(ui.item.height() - 4.30);
        },
        cursor: "grabbing",
        cursorAt: {
            left: 236 / 2
        }
    });
    $(".card").disableSelection();
}


function editText() {
    $(function() {
        $('li, .portlet-header').dblclick(function(event) {
            $this = $(this);
            $this.attr('contenteditable', "true");
            $this.blur();
            $this.focus();
        });
    })
}


//  Allows the cards to be edited with a double click
function initPortlets() {
    //  Allows the card containers to be moved and sorted
    $(".column").sortable({
        start: function(e, ui) {
            /*  The minus 4.30 makes it so that the placeholder doesnt move the
                other card
            */
            ui.placeholder.height(ui.item.height() + 6);
        },
        connectWith: ".column",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all",
        cursor: "grabbing"
    });

    $(".portlet:not(.initialized)")
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all")
        .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>")
        .addClass("initialized")
    $(".cardSortable:not(.initialized)")
        .append('<button class="add-new-card" onclick="addCard(this)" > + add new card </button>')
        .addClass("initialized")
}


function addList() {
    $(".add-new-list").before('<div class="column"> <div class="portlet"><div class="portlet-header">New list</div><div class="portlet-content"><ul class="cardSortable card"></ul></div></div>');
    width = $("body").css("width")

    //  This increases the width of the page when we add new columns
    var widthSplit = width.match(/[a-z]+|[^a-z]+/gi);
    newWidth = parseInt(widthSplit[0]) + 300 + "px"
    $("body").css("width", newWidth);
    init()
}

function addCard(id) {
    $(id).before("<li class=\"ui-state-default\">New Card</li>")
    init()
}


function init() {
    editText()
    initPortlets()
    cardSortable()
}

function changeBG() {
    var selectedBGColor = document.getElementById("colorpickerbox").value;
    document.body.style.background = "#" + selectedBGColor;

}

$(function() {
    init()
});
