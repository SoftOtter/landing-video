window.addEventListener('DOMContentLoaded', function () {
    const site = document.querySelector('.site');
    const menu = document.querySelector('nav');
    const overlay = document.querySelector('.site .overlay');

    // Open menu
    const menuButton = document.querySelector('header .btn-open-menu');
    menuButton.addEventListener('click', function () {
        site.classList.add('site-transform');
        menu.classList.add('active');
        overlay.classList.add('active');
    });
    
    // Close menu
    const closeMenuButton = document.querySelector('nav .quit-btn');
    closeMenuButton.addEventListener('click', function () {
        site.classList.remove('site-transform');
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });
    const closeMenuBackground = overlay; // document.querySelector('.site .overlay');
    closeMenuBackground.addEventListener('click', function () {
        site.classList.remove('site-transform');
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });


    const form = document.querySelector('.form');

    // Open popup
    const regButton = document.querySelector('main .btn-sign-up');
    regButton.addEventListener('click', function () {
        form.classList.add('active');

        let video = document.querySelector('main video');
        video.pause();

        let playButton = document.querySelector('main .btn-play');
        playButton.classList.remove('hidden');
    });

    // Close popup
    const closePopupButton = document.querySelector('.form .quit-btn');
    closePopupButton.addEventListener('click', function () {
        form.classList.remove('active');
    });
    const closePopupBackground = form; // document.querySelector('.form');
    closePopupBackground.addEventListener('click', function (event) {
        if (event.target === closePopupBackground) {
            form.classList.remove('active');
        }
    });


    const playButton = document.querySelector('main .btn-play');
    const video = document.querySelector('main video');

    // Video switcher
    const videoSwitchers = document.querySelectorAll('main .video-switcher .video-select');
    const videos = ['videos/yosemite.mp4', 'videos/rain.mp4', 'videos/nature.mp4', 'videos/ice.mp4'];
    for (let i = 0; i < videoSwitchers.length; i++) {
        videoSwitchers[i].addEventListener('click', function () {
            if (videoSwitchers[i].classList.contains('active')) {
                return;
            }
            video.src = videos[i];
            video.load();
            const activeSwitcher = document.querySelector('main .video-switcher .video-select.active');
            activeSwitcher.classList.remove('active');
            videoSwitchers[i].classList.add('active');
            playButton.classList.remove('hidden');
        });
    };

    // Video play-button
    playButton.addEventListener('click', function () {
        video.play();
        playButton.classList.add('hidden');
    });

    //Video switch on end
    video.addEventListener('ended', function () {
        const currentVideoIndex = videos.indexOf(video.attributes.src.value);
        let nextVideoIndex = 0;
        // Check that sizes of arrays are matching
        if (videoSwitchers[(currentVideoIndex + 1) % videos.length] !== undefined) {
           nextVideoIndex = (currentVideoIndex + 1) % videos.length;
        }
        video.src = videos[nextVideoIndex];
        video.play();

        videoSwitchers[currentVideoIndex].classList.remove('active');
        videoSwitchers[nextVideoIndex].classList.add('active');
    });

});