window.addEventListener("load", () => {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    drawGrid(ctx);

});

let settings = {
    offsetX: 50,
    offsetY: 50,
    gridX: 8,
    gridY: 8,
    gridWidth: 100,
    gridHeight: 100,
}

function drawGrid(ctx){
    for(let i = 0 ; i < settings.gridX ; i++){
        for(let j = 0 ; j < settings.gridY ; j++){
            if( ( i + j ) % 2 == 0 ){
                ctx.fillStyle = "black";
            }else{
                ctx.fillStyle = "brown";
            }
            let x = settings.offsetX + (j * settings.gridWidth);
            let y = settings.offsetY + (i * settings.gridHeight);
            ctx.fillRect(x, y, settings.gridWidth, settings.gridHeight);
        }
    }
}