nosex=0;
nosey=0;

function preload()
{
clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(nosex, nosey, 20);
    image(clown_nose, nosex, nosey, 30, 30);
}
function take_snapshot()
{
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log('poseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}