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

    const landingVideoContainer = document.getElementById(id + '-container');
    const video = document.createElement('video');

    video.id = id;
    video.src = '/' + id + '.mp4';
    // video.height = "auto";
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    video.loop = true;
    video.setAttribute('disablepictureinpicture', '');
    video.setAttribute('controlslist', 'nodownload nofullscreen noplaybackrate');
    
    video.load();
    video.addEventListener('loadeddata', function() {
        // Video is loaded and can be played
        landingVideoContainer.append(video);
     }, false);
}

loadDemoVideo();
window.onresize = loadDemoVideo;