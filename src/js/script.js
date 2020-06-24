document.addEventListener('DOMContentLoaded', function(){
    let headerContent = document.querySelector('.header').children;
    let links = document.querySelectorAll('.nav__list-item');
    let InYaFaceText = document.querySelectorAll('.index-main__heading3, .index-main__heading2, .index-main__call-to-action');
    let h1 = document.querySelector('.index-main__heading1');

    let footer = document.querySelector('.footer');
    let footerInfoBox1Sect2 = document.querySelectorAll('.info-box1__sect2-heading, .info-box1__sect2-text1, .info-box1__sect2-text2, .info-box1__btn');

    let backgroundBack = document.querySelector('.background-wrapper1');
    let backgroundFront = document.querySelector('.background-wrapper2');
    
    function contentAnim(elm, duration, y, x, scale, opacityValue, dir){
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

    function backgroundAnim(elm, scale, x, y, dur){
        anime({
            targets: elm,
            translateX: x,
            translateY: y,
            scale: 1.6,
            direction: 'reverse',
            easing: 'easeInOutQuad',
            duration: dur,
            // loop: true,
          });
    }

    backgroundAnim(backgroundBack, 1.9, -300, 200, 25000);
    backgroundAnim(backgroundFront, 1.9, 0, 200, 14000);

    contentAnim(h1, 25000, -100, 0, 1, 0, 'reverse');
    contentAnim(headerContent, 3000, -100, 0, 1, 0, 'reverse');
    contentAnim(links, 2000, -100, 0, 1, 0, 'reverse');
    contentAnim(InYaFaceText,5000, 100, 0, 1, 0, 'reverse');
    
    contentAnim(footerInfoBox1Sect2, 3500, 100, -10, 1, 0, 'reverse')
    contentAnim(footer, 3000, 100, 0, 1, 0, 'reverse');
    
})