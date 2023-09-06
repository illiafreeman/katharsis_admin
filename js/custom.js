$(document).ready(function () {

    $('.modal__close').click(function() {
        $('body').removeClass('oh');
        $('.modal-bg').removeClass('vis');
        $('.modal').removeClass('vis');
    });
    function minimodal(){
        $('body').addClass('oh');
        $('.modal-bg').addClass('vis');
        $('.modal').addClass('vis');
    }
    $('.confirm').click(function() {
        minimodal();
    });
    $('.menu-btn').click(function () {
        $('.nav').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#hamburger').toggleClass('open');
    });
});








