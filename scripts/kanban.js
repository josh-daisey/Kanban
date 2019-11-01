//  When click and draging the task boxes, changes cursor icon.
$(function() {
  $('li').mousedown(function() {
    $(this).css('cursor', 'grabbing');
  });
  $('li').mouseup(function() {
    $(this).css('cursor', 'grab');
  });
});

//  Allows the task boxes to be moved
$(function() {
  $("#sortable, #sortable").sortable({
    connectWith: ".connectedSortable"
  })
});

//  Allows the task boxes to be edited with a double click
$(function() {
  $('li').dblclick(function(event) {
    $this = $(this);
    $this.attr('contenteditable', "true");
    $this.blur();
    $this.focus();
  });

  //  Allows the portlets to be moved and sorted
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