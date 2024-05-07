noseX=0;
noseY=0;
eyesX=0;
eyesY=0;
headX=0;
headY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/9FB9crpT/clown-nose.png');
    gogles = loadImage('https://i.postimg.cc/65fw06D5/Gogles.png');
    hair = loadImage('https://i.postimg.cc/1zCYR2bQ/Black-hair.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        eyesX = results[0].pose.eyes.x;
        eyesY = results[0].pose.eyes.y;
        headX = results[0].pose.head.x;
        headY = results[0].pose.head.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        console.log("eyes x = " + results[0].pose.eyes.x);
        console.log("eyes y = " + results[0].pose.eyes.y);
        console.log("head x = " + results[0].pose.head.x);
        console.log("head y = " + results[0].pose.head.y);
    }
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill(255,0,0);
  stroke(255,0,0);
  circle(noseX, noseY, 20);
  image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

