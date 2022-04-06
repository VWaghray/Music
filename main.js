 song = "";

function preload()
{
	song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
	video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
	//poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}
function draw(){
    image(video, 0, 0, 600, 500);
    
    fill("#FF0000");
	stroke("#FF0000");
}

function play(){
    song.play();
}