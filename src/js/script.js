document.addEventListener('DOMContentLoaded', function(){
    let headerContent = document.querySelector('.header').children;
    let links = document.querySelectorAll('.nav__list-item');
    let InYaFaceText = document.querySelectorAll('.index-main__heading3, .index-main__heading2, .index-main__call-to-action');
    let h1 = document.querySelector('.index-main__heading1');
    
    let footer = document.querySelector('.footer');
    let footerInfoBox1Sect2 = document.querySelectorAll('.info-box1__sect2-heading, .info-box1__sect2-text1, .info-box1__sect2-text2, .info-box1__btn');
    let footerInfoBox2Sect1 = document.querySelectorAll ('.info-box2__sect1-heading, .info-box2__sect1-text1, .info-box2__sect1-text2, .info-box2__sect1-link-section');
    let footerSoMeLinks = document.querySelectorAll('.info-box2__sect1-link-section-links');
    let footerInfoBox2MapPin = document.querySelector('.info-box2__map-pin-point');

    let backgroundBack = document.querySelector('.background-wrapper1');
    let backgroundFront = document.querySelector('.background-wrapper2');
    
    function contentAnim(elm, duration, x, y, scale, opacityValue, dir){
        anime({
            targets: elm,
            translateY: y,
            translateX: x,
            scale: scale,
            direction: dir,
            easing: 'easeInOutQuad',
            opacity: opacityValue,
            delay: anime.stagger(400, {direction: 'reverse'}),
            duration: duration,
            endDlay: 1000,
          });
    }

    contentAnim(backgroundBack, 5000, -200, 100, 2, 1, 'reverse');
    contentAnim(backgroundFront, 5000, 250, 220, 2, 1, 'reverse');

    contentAnim(h1, 5500, 0, -100, 1, 0, 'reverse');
    contentAnim(headerContent, 3000, 0, -100, 1, 0, 'reverse');
    contentAnim(links, 2000, 0, -100, 1, 0, 'reverse');
    contentAnim(InYaFaceText,4500, 0, 100, 1, 0, 'reverse');
    
    contentAnim(footer, 3000, 0, 100, 1, 0, 'reverse');
    contentAnim(footerInfoBox1Sect2, 3500, -10, 100, 1, 0, 'reverse');
    contentAnim(footerInfoBox2Sect1,  3500, 0, 100, 1, 0, 'reverse');
    contentAnim(footerSoMeLinks, 3500, -10, 100, 1, 0, 'reverse');
    contentAnim(footerInfoBox2MapPin, 3500, 300, 0, 1, 0, 'reverse')
    
});

