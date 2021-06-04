$(document).ready(function () {
    $("#slider-demo").sliderResponsive({
        autoPlay: "on",
    });

    $("#typed").typing({
        strings: ['Freelancer', 'Web Designer', 'Web Developer'],
        loopCount: 3,
        typingColor: 'black',
    });
    
    new WOW().init();

    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();

    $('.bxslider').bxSlider({
        randomStart: true,
        speed: 600,
        auto: true,
    });

    var mixer = mixitup('.row', {
        animation: {
            duration: 600,
        }
    });
    
    $('.navigation').scrollMenu({
    });


    $('.main-nav ul li a').click(function(){
        $('.main-nav ul li a').removeClass('active');
        $(this).addClass('active');
    })


    scroller.init();

});

function openNav() {
    document.getElementById('mynav').style.height = "100%"
}
function closeNav() {
    document.getElementById('mynav').style.height = "0%"
}