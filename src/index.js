if (Hls.isSupported()) {
    var videos = document.querySelectorAll("video");
    videos.forEach(video => {
        var url = video.getAttribute("src");
        var hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
    });
}
