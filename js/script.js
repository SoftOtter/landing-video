window.addEventListener('DOMContentLoaded', function () {
    // Open menu
    let menuButton = document.querySelector('header .btn-menu');
    menuButton.addEventListener('click', function () {
        let site = document.querySelector('.site');
        site.classList.add('site-transform');
        let menu = document.querySelector('nav');
        menu.classList.add('active');
        let overlay = document.querySelector('.site .overlay');
        overlay.classList.add('active');
    });
    
    // Close menu
    let closeMenuButton = document.querySelector('nav .quit-btn');
    closeMenuButton.addEventListener('click', function () {
        let site = document.querySelector('.site');
        site.classList.remove('site-transform');
        let menu = document.querySelector('nav');
        menu.classList.remove('active');
        let overlay = document.querySelector('.site .overlay');
        overlay.classList.remove('active');
    });
    let closeMenuBackground = document.querySelector('.site .overlay');
    closeMenuBackground.addEventListener('click', function () {
        let site = document.querySelector('.site');
        site.classList.remove('site-transform');
        let menu = document.querySelector('nav');
        menu.classList.remove('active');
        let overlay = document.querySelector('.site .overlay');
        overlay.classList.remove('active');
    });


    // Open popup
    let regButton = document.querySelector('main .btn-sign-up');
    regButton.addEventListener('click', function () {
        let form = document.querySelector('.form');
        form.classList.add('active');
    });

    // Close popup
    let closePopupButton = document.querySelector('.form .quit-btn');
    closePopupButton.addEventListener('click', function () {
        let form = document.querySelector('.form');
        form.classList.remove('active');
    });
    let closePopupBackground = document.querySelector('.form');
    closePopupBackground.addEventListener('click', function (event) {
        if (event.target === closePopupBackground) {
            let form = document.querySelector('.form');
            form.classList.remove('active');
        }
    });

    // Video switcher
    let videoSwitchers = document.querySelectorAll('main .video-switcher .video-select');
    let videos = ['videos/yosemite.mp4', 'videos/rain.mp4', 'videos/nature.mp4', 'videos/ice.mp4'];
    for (let i = 0; i < videoSwitchers.length; i++) {
        videoSwitchers[i].addEventListener('click', function () {
            if (videoSwitchers[i].classList.contains('active')) {
                return;
            }
            let video = document.querySelector('main video');
            video.src = videos[i];
            video.load();
            let activeSwitcher = document.querySelector('main .video-switcher .video-select.active');
            activeSwitcher.classList.remove('active');
            videoSwitchers[i].classList.add('active');
        });
    };

    // Video play-button
    let playButton = document.querySelector('main .btn-play');
    playButton.addEventListener('click', function () {
        let video = document.querySelector('main video');
        video.play();
    });

});