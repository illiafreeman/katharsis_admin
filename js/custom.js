$(document).ready(function () {

    $('.modal__close').click(function() {
        $('body').removeClass('oh');
        $('.modal-bg').removeClass('vis');
        $('.modal').removeClass('vis');
    });
    function modal(){
        $('body').addClass('oh');
        $('.modal-bg').addClass('vis');
        $('.modal').addClass('vis');
    }
    $('.btn').click(modal);
});








