window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // canvas settings
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'lime';
    ctx.lineWidth = 25;

    // effect settings
    let size = 170;
    let sides = 10;
    let maxLevel = 3;
    let scale = 0.6;
    let spread = 0.8;
    let branches = 2;

    // Fractal Art
    
    function drawBranch(level){
        if (level > maxLevel) return;
        ctx.beginPath();    // start drawing a new shape
        ctx.moveTo(0,0);    // set starting x and y co-ordinates of a new shape
        ctx.lineTo(size,0);   // set ending co-ordinates of a line
        ctx.stroke();   // outlines the current path with the current stroke style
        
        for (let i = 0; i < branches; i++){
            ctx.save();
            ctx.translate(size - (size/branches) * i,0);
            ctx.rotate(spread);
            ctx.scale(scale,scale);
            drawBranch(level + 1);
            ctx.restore();

            ctx.save();
            ctx.translate(size - (size/branches) * i,0);
            ctx.rotate(-spread);
            ctx.scale(scale,scale);
            drawBranch(level + 1);
            ctx.restore();
        }
    }

    function drawFractal(){
        ctx.save();
        ctx.translate(canvas.width/2,canvas.height/2);
        ctx.scale(1,1);
        ctx.rotate(0);
        for (let i = 0; i < sides; i++){
            ctx.rotate((Math.PI * 2)/sides);    // angle values in radians
                drawBranch(0);
        }
        ctx.restore()
    }
    drawFractal();

});