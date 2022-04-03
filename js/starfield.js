/* Get the element canvas in the dom */
const canvas = document.getElementById("hero__canvas");
/*  Access to the canvas API for modifying and animating the element*/
const c = canvas.getContext("2d");
/* variables "w" and "h" will keep track of the internal resolution of the canvas */
let w;
let h;
/* This get the size of the screen will we react on it */
const setCanvasExtents = () => {
    w = document.body.clientWidth;
    h = document.body.clientHeight;
    canvas.width = w;
    canvas.height = h / 1.5;
};

setCanvasExtents();

window.onresize = () => {
    setCanvasExtents();
};
/* here, we create the array of Stars with random numbers */
const makeStars = count => {
    const out = [];
    for (let i = 0; i < count; i++) {
        const s = {
            x: Math.random() * 1600 - 800,
            y: Math.random() * 900 - 450,
            z: Math.random() * 1000
        };
        out.push(s);
    }
    return out;
};

let stars = makeStars(10000);
/* This create the background */
const clear = () => {
    c.fillStyle = "#090a0f";
    c.fillRect(0, 0, canvas.width, canvas.height);
};
/* This draw a single star */
const putPixel = (x, y, brightness) => {
    const intensity = brightness * 255;
    const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
    c.fillStyle = rgb;
    c.fillRect(x, y, 1, 1);
};
/* this is the function to keep moving the stars */
const moveStars = distance => {
    const count = stars.length; /* this keep moving the star in an infinite loop */
    for (var i = 0; i < count; i++) {
        const s = stars[i];
        s.z -= distance;
        while (s.z <= 1) {
            s.z += 1000;
        }
    }
};

let prevTime;
const init = time => {
    prevTime = time;
    requestAnimationFrame(tick);
};
/* This function determines how much time passed since the last refresh, 
moves our animation forward, draws the current state of our stars on the canvas, 
then requests to be called on the next screen refresh again.*/
const tick = time => {
    let elapsed = time - prevTime;
    prevTime = time;

    moveStars(elapsed * 0.15); /* this define the speed of the animation ina 60fps environment */

    clear();

    const cx = w / 2;
    const cy = h / 2;

    const count = stars.length;
    for (var i = 0; i < count; i++) {
        const star = stars[i];
        /* X and Y define the spread of the stars in the screen. 
        Higher the factor, higher the amount of stars in each coordinate frame */
        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.0015);

        if (x < 0 || x >= w || y < 0 || y >= h) {
            continue;
        }
        /* this define the brightness of each star in the canvas */
        const d = star.z / 1000.0;
        const b = 1 - d * d;

        putPixel(x, y, b);
    }

    requestAnimationFrame(tick);
};

requestAnimationFrame(init);