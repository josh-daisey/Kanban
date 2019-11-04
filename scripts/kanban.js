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
$(function() {
  $("#card, #card").sortable({
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
  console.log($(this).height())
  $("#card").disableSelection();
});


//  Allows the cards to be edited with a double click
$(function() {
  $('li').dblclick(function(event) {
    $this = $(this);
    $this.attr('contenteditable', "true");
    $this.blur();
    $this.focus();
  });

  //  Allows the card containers to be moved and sorted
  $(".column").sortable({
    connectWith: ".column",
    handle: ".portlet-header",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all",
    cursor: "grabbing"
  });

  $(".portlet")
    .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
    .find(".portlet-header")
    .addClass("ui-widget-header ui-corner-all")
    .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

  $(".portlet-toggle").on("click", function() {
    var icon = $(this);
    icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
    icon.closest(".portlet").find(".portlet-content").toggle();
  });
});