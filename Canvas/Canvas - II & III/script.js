var canvas;
var ctx;

window.addEventListener("load", () => {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    drawGrid(ctx);

});

window.addEventListener("keyup", (e) => {
    changePosition(e);
})

let settings = {
    offsetX: 50,
    offsetY: 50,
    gridX: 8,
    gridY: 8,
    gridWidth: 100,
    gridHeight: 100,
}

let player = {
    posX: 0,
    posY: 0,
}

function drawGrid(){
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

            if(i == player.posX && j == player.posY){
                let cx = x + (settings.gridWidth / 2);
                let cy = y + (settings.gridHeight / 2);
                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.arc(cx, cy, (settings.gridWidth / 3), 0, 360);
                ctx.fill();
            }
        }
    }
    window.requestAnimationFrame(drawGrid);
}

function changePosition(e) {
    e.preventDefault();
    if(!["ArrowDown", "ArrowLeft", "ArrowUp", "ArrowRight"].includes(e.code)){
        return;
    }
    switch(e.code){
        case "ArrowRight":{
            player.posY = ( (player.posY + 1) % settings.gridY );
            break;
        }
        case "ArrowLeft":{
            player.posY--;
            if(player.posY < 0){
                player.posY = settings.gridY - 1;
            }
            break;
        }
        case "ArrowDown":{
            player.posX = ( (player.posX + 1) % settings.gridX );
            break;
        }
        case "ArrowUp":{
            player.posX--;
            if(player.posX < 0){
                player.posX = settings.gridX - 1;
            }
            break;
        }
        default:{
            return;
        }
    }
    console.log(e.code);
    // drawGrid();
}