$(function() {
  /*
      The distinction between manipulating the list items, and tags with the
      portlet-header was in order to provide a difference between them
      when hovering to give a better feel.
  */
  $('li').mousedown(function() {
    //  When click and draging the card, changes cursor icon.
    $(this).css('cursor', 'grabbing');
    //  When right clicking card, wont bring up context menu
    $(this).attr('oncontextmenu', "return false");
  });
  $('.portlet-header').mousedown(function() {
    //  When click and draging the card container, change cursor icon.
    $(this).css('cursor', 'grabbing');
  });

  //  On mouse release, change cursor icon
  $('.portlet-header').mouseup(function() {
    $(this).css('cursor', 'grab');
  });
  $('li').mouseup(function() {
    $(this).css('cursor', 'pointer');
  });
});

//  Allows the cards to be moved
$(function() {
  $("#sortable, #sortable").sortable({
    connectWith: ".connectedSortable"
  })
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
    placeholder: "portlet-placeholder ui-corner-all"
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