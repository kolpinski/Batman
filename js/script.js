// Burger menu
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');
burger.addEventListener('click', () => {
    navigation.classList.add('navigation_active');
});

navigationClose.addEventListener('click', () => {
    navigation.classList.remove('navigation_active');
});

//Музыка

const mute = document.querySelector('.mute__checkbox');
const audio = new Audio('audio/waterTower.mp3');

mute.addEventListener('change', () => {
    if(mute.checked){
        audio.play();
    } else{
        audio.pause();
    }
})


try { //конструкция try { } catch - отлавливает ошибки
    const sliderThumbs = new Swiper('.slider-thumbs', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides: true,
        loopedSlides: 4,
    });
    
    sliderThumbs.on('click', (swiper) => {
        swiper.slideTo(swiper.clickedIndex);
    });
    
    const sliderMain = new Swiper('.slider-main', {
        loop: true,
        spaceBetween: 10,
        loopedSlides: 4,
    });
    
    sliderThumbs.controller.control = sliderMain;
    sliderMain.controller.control = sliderThumbs;

//отключение видео при переключении слайдов
    const videos = document.querySelectorAll('video');

    sliderMain.on('slideChange', () => {
        for(let i = 0; i < videos.length; i += 1){
            videos[i].pause();
        }
    });

    //Пагинация
    const pagination = document.querySelector('.pagination');
    const paginationButton = document.querySelector('.pagination__arrow');

    paginationButton.addEventListener('click', () => {
        pagination.classList.toggle('pagination_active')
    })

} catch{
    console.log('На этой странице не слайдера');
}
