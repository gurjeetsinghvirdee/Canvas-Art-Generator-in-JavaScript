window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // canvas settings
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 10;
    ctx.shadowColor = 'rgba(0,0,0,1)';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;


    // effect settings
    let size = canvas.width < canvas.height ? canvas.width * 0.3 : canvas.height * 0.5;     // ternary operator condition to evaluate ? run this if true : run this if false
    const maxLevel = 4;       // determines depth of the fractal
    const branches = 2;
    let sides = 5;
    let scale = 0.5;
    let spread = 0.1;
    let color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';

    // controls
    const randomizeButton = document.getElementById('randomizeButton');
    
    function drawBranch(level){
        if (level > maxLevel) return;
        ctx.beginPath();    // start drawing a new shape
        ctx.moveTo(0,0);    // set starting x and y co-ordinates of a new shape
        ctx.lineTo(size,0);   // set ending co-ordinates of a line
        ctx.stroke();   // outlines the current path with the current stroke style
        
        for (let i = 0; i < branches; i++){
            ctx.save();
            ctx.translate(size - (size/branches) * i,-10);
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
        ctx.strokeStyle = color;
        ctx.translate(canvas.width/2,canvas.height/2);
        for (let i = 0; i < sides; i++){
            ctx.rotate((Math.PI * 2)/sides);    // angle values in radians
                drawBranch(0);
        }
        ctx.restore()
    }
    drawFractal();

    function randomizeFractal(){
        sides = Math.random() * 7 + 2;
        scale = Math.random() * 0.2 + 0.4;
        spread = Math.random() * 2.9 + 0.1;
        color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
        drawFractal();
    }
    
    randomizeButton.addEventListener('click', randomizeFractal);
});