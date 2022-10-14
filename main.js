window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // canvas settings
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'lime';
    ctx.lineWidth = 30;
    ctx.lineCap = 'round';

    

    ctx.fillRect(50,50,100,100);

    ctx.beginPath();    // start drawing a new shape
    ctx.moveTo(canvas.width/2,canvas.height/2);    // set starting x and y co-ordinates of a new shape
    ctx.lineTo(canvas.width/2 - 300,canvas.height/2);   // set ending co-ordinates of a line
    ctx.stroke();   // outlines the current path with the current stroke style
});