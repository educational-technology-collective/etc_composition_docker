var video = document.getElementById('lecture');
var playButton = document.getElementById("play_button");

var supposedCurrentTime = 0;
video.addEventListener('timeupdate', function() {
  if (!video.seeking) {
        supposedCurrentTime = video.currentTime;
  }
  if (video.ended == true) {
    console.log('ENDED')
    video.pause();
    playButton.removeEventListener('click', changeButtonText)
    playButton.innerHTML = "END OF VIDEO 🛑"
    playButton.setAttribute('disabled', '')
    document.getElementById("next_button").style.display="block"
  }
});

// prevent user from seeking
video.addEventListener('seeking', function() {
  // guard agains infinite recursion:
  // user seeks, seeking is fired, currentTime is modified,
  // seeking is fired, current time is modified, ...
  var delta = video.currentTime - supposedCurrentTime;
  if (Math.abs(delta) > 0.01) {
    console.log("Seeking is disabled");
    video.currentTime = supposedCurrentTime;
  }
});
