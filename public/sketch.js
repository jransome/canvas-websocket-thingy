// client side

let socket = io(); // from cdn
socket.on('mouseMoved', (otherMousePos) => {
    newDrawing(otherMousePos);
})

function newDrawing({x, y}) {
    noStroke();
    fill(255);
    ellipse(x, y, 35, 35);
}

// p5 callback
function setup() {
    createCanvas(1200, 800);
    background(0);
    console.log('setup')
}

// p5 callback
function mouseDragged() {
    let mousePos = {
        x: mouseX,
        y: mouseY
    }
    newDrawing(mousePos)

    console.log('emmitting', socket)
    socket.emit('mouseMoved', mousePos)
}
