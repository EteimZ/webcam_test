// Prefer camera resolution nearest to 1280x720.
var constraints = { video: { facingMode: { ideal: "environment" } } };
const canvas = document.querySelector('canvas');
const Img = document.querySelector('img');
var snap_btn = document.querySelector('.snap');
var video = document.querySelector('video');


navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.

Screenshot = () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  Img.src = canvas.toDataURL('image/png');
  Img.style.display = 'inline';
};

snap_btn.addEventListener('click', Screenshot)