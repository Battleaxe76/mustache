noseX=0;
noseY=0;

function preload(){
clown_nose=loadImage("mustache.png")
}
function setup(){
    canvas=createCanvas(600,600);
    canvas.center() ;
    video=createCapture(VIDEO);
    video.size(600,600);
    video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
 image(video,0,0,600,600);
 image(clown_nose,noseX,noseY,100,100)

}
function take_snapshot(){
save("MyFilterPhoto");
}
function modelLoaded(){
    console.log('pose net is intialized');
}

function gotPoses(results){
if (results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x-40;
    noseY=results[0].pose.nose.y+5;
    console.log("noseX="+noseX);
    console.log("noseY="+noseY);
}}


