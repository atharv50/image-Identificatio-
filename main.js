img = "";
status = ""; 

function preload() {
    img = loadImage('dog_cat.jpg')
}

function setup () {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

img = "";

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 ); 

    fill("#0000FF");
    text(img, 0, 0, 640, 420,);
    noFill();
    stroke("#0000FF");
    rect(300, 90, 270, 320 );
}

function modelloaded() {
    console.log("Model has been loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}