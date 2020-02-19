function getId(a) {
    return document.getElementById(a)
}

function getClass(a, b) {
    return document.getElementsByClassName(a)[b];
}
$(function () {
    setInterval(function () {
        $('#box').css({
            backgroundColor: '#' + randNomber(0, 9) + randNomber(0, 9) + randNomber(0, 9) + randNomber(0, 9) + randNomber(0, 9) + randNomber(0, 9)
            , borderColor: '#' + randNomber(0, 9) + randNomber(0, 9) + randNomber(0, 9) + randNomber(0, 9) + randNomber(0, 9) + randNomber(0, 9)
            , boxShadow: '10px 10px 50px #' + randNomber(0, 9) + randNomber(0, 9) + randNomber(0, 9)
        })
        $('#box').animate({
            marginLeft: randNomber(0, 500) + 'px'
            , marginTop: randNomber(0, 500) + 'px'
        })

        function randNomber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }, 500)
})