$('.quadrato').each(function(){
    var numero_random = (get_random(0, 10));
    $(this).append(numero_random);
    if(numero_random == 0) {
    $(this).addClass('zero');
} else if (numero_random  % 2 == 0) {
    $(this).addClass('pari');
}

});
function get_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
