window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // canvas settings
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'lime';
    ctx.fillRect(50,50,100,100);

    ctx.beginPath();      // start drawing a new shape
    ctx.moveTo(300,300);    // set starting x and y co-ordinates of a new shape
    ctx.lineTo(400, 400);   // set ending co-ordinates of a line
    ctx.stroke();   // outlines the current path with the current stroke style
});