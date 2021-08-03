import { AWSAPIGatewayWrapper } from "./scripts/etc_http_aws_api_gateway_wrapper";

let number = Date.now();

let awsAPIGatewayWrapper = new AWSAPIGatewayWrapper(
    {
        url: "https://telemetry.mentoracademy.org",
        bucket: "telemetry-edtech-labs-si-umich-edu",
        path: "dev/liwarren", // e.g., path/to/resource
    });

var playButton = document.getElementById("play_button");
// Event listener for the play/pause button

changeButtonText = function() {
  if (video.paused == true) {
    video.play();
    playButton.innerHTML = "Pause ⏸️";
    //awsAPIGatewayWrapper.request(["Play", timestamp]);
  }
  else {
    video.pause();
    playButton.innerHTML = "Play ▶️";
    //awsAPIGatewayWrapper.request(["Pause", timestamp]);
  }
}

playButton.addEventListener("click", changeButtonText);
