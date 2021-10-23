
cam={
id:"content",
scan:function(){
  out  = '<canvas id="qr-canvas" class="row"></canvas>';
  out += '<input type=button value="Take" onClick="cam.shot()">';
  out += '<div id="results" class="row"></div>';
document.getElementById(this.id).innerHTML=out;
const video = document.createElement("video");
const canvasElement = document.getElementById("qr-canvas");
const canvas = canvasElement.getContext("2d");
navigator.mediaDevices
// .getUserMedia({ video: { facingMode: "environment" } })
.getUserMedia({ video: { facingMode: "user" } })
.then(function(stream) {
scanning = true;
canvasElement.hidden = false;
video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
video.srcObject = stream;
video.play();
tick();
});

function tick() {
canvasElement.height = video.videoHeight;
canvasElement.width = video.videoWidth;
canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
scanning && requestAnimationFrame(tick);
};
},

shot:function(callback) {
var canvas = document.getElementById('qr-canvas');
var dataURL = canvas.toDataURL('image/jpeg', 0.5);
console.log(dataURL);
document.getElementById('results').innerHTML ='<img class="row" id="imageprev" src="'+dataURL+'"/>';
// this.simpan(callback);
},
};
