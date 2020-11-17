var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();

});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();

});

document.querySelector("#slower").addEventListener("click", function () {
    console.log("Slow Down");
    video.playbackRate  *= 0.9;
    console.log("New Speed:", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function () {
    console.log("Speed Up");
    video.playbackRate  *= 1.1;
    console.log("New Speed:", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function () {
    console.log("Skip Ahead");
    video.currentTime += 5;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
        video.play();
    }
    console.log("Video is at:", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function () {
    video.muted = !video.muted;
    document.querySelector("#mute").innerHTML = !video.muted ? "Mute" : "Unmute";
    console.log(video.muted ? "Mute" : "Unmute");
});

document.querySelector("#volumeSlider").addEventListener("click", function () {
    console.log("Volume Slider");
    document.querySelector("#volume").innerHTML = document.querySelector("#volumeSlider").value + "%";
    video.volume = document.querySelector("#volumeSlider").value / 100.0;
    console.log("New Volume:", document.querySelector("#volumeSlider").value + "%");
});

document.querySelector("#old").addEventListener("click", function () {
    console.log("Old School")
    video.classList.add("oldTime");

});

document.querySelector("#original").addEventListener("click", function () {
    console.log("Original")
    video.classList.remove("oldTime");

});