function loadDemoVideo() {
    const windowWidth = window.innerWidth;
    let id;

    if (windowWidth > 1548) {
        id = 'demo-large';   
    }  else if (windowWidth > 830) {
        id = 'demo-small';
    }

    const videoExists = document.getElementById(id) !== null;
    if (!id || videoExists) return;
    createDemoVideo(id);
}

function createDemoVideo(id) {

    const landingVideoContainer = document.getElementById('landing-video-container');
    const video = document.createElement('video');

    video.id = id;
    video.src = '/' + id + '.mp4';
    // video.height = "auto";
    video.autoplay = true;
    video.controls = true;
    video.loop = true;
    video.setAttribute('disablepictureinpicture', true);
    video.setAttribute('controlslist', 'nodownload nofullscreen noplaybackrate');

    //It is a small screen
    landingVideoContainer.append(video);
}

loadDemoVideo();
window.onresize = loadDemoVideo;