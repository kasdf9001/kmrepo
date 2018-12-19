$( document ).ready(function() {
  $('.content-toggler').click(function(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      if( $(this).hasClass('active') ) {
        $(this).children('input').prop('checked',false);
        $(this).removeClass('active');
      } else {
        $(this).children('input').prop('checked',true);
        $(this).addClass('active');
      }

      parseCheckboxesForContent();
  });

  function parseCheckboxesForContent() {
    $('input').each(function() {
      var contentelement = $(this).attr('id').replace('selection','content');
      if( $(this).is(':checked') ) {
          $('#' + contentelement ).show();
      } else {
          $('#' + contentelement ).hide();
      }
    });
  }

});
