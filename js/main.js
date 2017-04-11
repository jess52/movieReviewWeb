$('#tabAll').on('click', function() {
    $('#tabAll').parent().addClass('active');
    // Cancel the default action
    //e.preventDefault(); 
    $('.tab-pane').addClass('active in');
    $('[data-toggle="tab"]').parent().removeClass('active');
});