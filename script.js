let movingCanvas = document.querySelector(".smallCanvas");
let mctx = movingCanvas.getContext("2d");

let bigCanvas = document.querySelector(".bigCanvas");
let bctx = bigCanvas.getContext("2d");

let x = 0;
let y = 0;

// centerX;
let cx = 200;
// centerY;
let cy = 200;

let movingValue = 50;

function drawStick(x, y) {
    bctx.clearRect(0, 0, bigCanvas.width, bigCanvas.height);
    mctx.lineWidth = 5;

    // HEAD
    mctx.beginPath();
    mctx.arc(cx, cy - 150, 50, 0, (360 * Math.PI) / 180);
    mctx.strokeStyle = "whitesmoke";
    mctx.stroke();

    // BODY
    mctx.beginPath();
    mctx.moveTo(200, 100);
    mctx.lineTo(200, 300);
    mctx.strokeStyle = "whitesmoke";
    mctx.stroke();

    // RIGHT ARM
    mctx.beginPath();
    mctx.moveTo(200, 200);
    mctx.lineTo(100, 120);
    mctx.strokeStyle = "whitesmoke";
    mctx.stroke();

    // LEFT ARM
    mctx.beginPath();
    mctx.moveTo(200, 200);
    mctx.lineTo(300, 120);
    mctx.strokeStyle = "whitesmoke";
    mctx.stroke();

    // RIGHT LEG
    mctx.beginPath();
    mctx.moveTo(200, 300);
    mctx.lineTo(100, 400);
    mctx.strokeStyle = "whitesmoke";
    mctx.stroke();

    // LEFT LEG
    mctx.beginPath();
    mctx.moveTo(200, 300);
    mctx.lineTo(300, 400);
    mctx.strokeStyle = "whitesmoke";
    mctx.stroke();

    bctx.drawImage(movingCanvas, x, y);
    mctx.clearRect(0, 0, movingCanvas.width, movingCanvas.height);
}
drawStick(0, 0);

document.addEventListener("keydown", function (event) {
    if (x > -100 && event.keyCode === 37) {
        x -= movingValue;
    } else if (y > 0 && event.keyCode === 38) {
        y -= movingValue;
    } else if (x < 500 && event.keyCode === 39) {
        x += movingValue;
    } else if (y < 200 && event.keyCode === 40) {
        y += movingValue;
    } else if (x === -100) {
        document.querySelector("body").classList.remove("on2");
        document.querySelector("body").classList.remove("on3");
        document.querySelector("body").classList.remove("on4");
        document.querySelector("body").classList.add("on1");
    } else if (y === 0) {
        document.querySelector("body").classList.remove("on1");
        document.querySelector("body").classList.remove("on3");
        document.querySelector("body").classList.remove("on4");
        document.querySelector("body").classList.add("on2");
    } else if (x === 500) {
        document.querySelector("body").classList.remove("on1");
        document.querySelector("body").classList.remove("on2");
        document.querySelector("body").classList.remove("on4");
        document.querySelector("body").classList.add("on3");
    } else if (y === 200) {
        document.querySelector("body").classList.remove("on1");
        document.querySelector("body").classList.remove("on2");
        document.querySelector("body").classList.remove("on3");
        document.querySelector("body").classList.add("on4");
    }
    event.preventDefault();
    drawStick(x, y);
    console.log("X: ", x, "  Y: ", y);
});
