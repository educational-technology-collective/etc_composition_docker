import { AWSAPIGatewayWrapper } from "@educational-technology-collective/etc_http_aws_api_gateway_wrapper";

let timestamp: number = Date.now();

let awsAPIGatewayWrapper: AWSAPIGatewayWrapper = new AWSAPIGatewayWrapper(
    {
        url: "https://example.com",
        bucket: "the-name-of-the-bucket",
        path: "the-path", // e.g., path/to/resource
    });

var playButton = document.getElementById("play_button");
// Event listener for the play/pause button

changeButtonText = function() {
  if (video.paused == true) {
    video.play();
    playButton.innerHTML = "Pause ⏸️";
    awsAPIGatewayWrapper.request(["Play", timestamp]);
  }
  else {
    video.pause();
    playButton.innerHTML = "Play ▶️";
    awsAPIGatewayWrapper.request(["Pause", timestamp]);
  }
}

playButton.addEventListener("click", changeButtonText);
