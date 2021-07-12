function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save('my_filtered_selfie.png');
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results, error){
    if(results.length > 0){
        console.log(results);
        console.log("nose X = " +results[0].pose.nose.x);
        console.log("nose Y = " +results[0].pose.nose.y);
    }else{
        console.error(error);
    }
}