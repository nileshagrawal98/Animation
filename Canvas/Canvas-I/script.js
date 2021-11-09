window.addEventListener("load", () => {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillRect(0, 0, 200,  300);
    
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(100, 150, 50, 0, 360);
    ctx.fill();

});