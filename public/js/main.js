$(document).ready(function(){
    $('body').fadeIn(1500);
});

$(function() {
    $('.far').hover(function() {
        $('blockquote').slideToggle(200);
    });
});

$(function() {
    $('#annihilation').click(function() {
        let i;
        for(i = 0; i < 20; i++){
            var milSec = Math.floor(Math.random() * 100) + 10;
            $('body').hide(milSec);
            $('body').show(milSec);
        }
    });
});

console.log('funguj');

