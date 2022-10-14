window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    // canvas settings
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'blueviolet';
    ctx.lineWidth = 25;
    ctx.lineCap = 'round';

    // effect settings
    const size = 200;
    ctx.save();
    ctx.translate(canvas.width/2,200);
    ctx.scale(1,1);
    ctx.rotate(0);
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.restore();
    ctx.beginPath();    // start drawing a new shape
    ctx.moveTo(canvas.width/2,canvas.height/2);    // set starting x and y co-ordinates of a new shape
    ctx.lineTo(size,canvas.height/2);   // set ending co-ordinates of a line
    ctx.stroke();   // outlines the current path with the current stroke style
});