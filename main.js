$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.tabs-container article').hide();
    $('.tabs-container article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.tabs-container article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});