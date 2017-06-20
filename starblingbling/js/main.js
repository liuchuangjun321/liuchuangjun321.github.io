var can;
var ctx;

var w;
var h;

var girlPic = new Image();
var starPic = new Image();

var num = 180;
var stars = [];

var lastTime;//上一帧刷新的时间
var deltaTime;//两帧之间的时间间隔

var switchy = false;
var life = 0;

document.body.onload = init;

function init () {
	can = document.getElementById('canvas');
	ctx = can.getContext('2d');

	h = can.height;
	w = can.width;
	// console.log(w);
	
	//添加一个鼠标事件监听事件
	document.addEventListener("mousemove", mousemove, false); 

	girlPic.src = "src/girl.jpg"; 
	starPic.src = "src/star.png";

	for(var j = 0; j < num; j++){
		var obj = new starObj();
		stars.push(obj);
		stars[j].init();
	}

	lastTime = Date.now();
	gameloop();
}

function drawBackGround(){
	ctx.fillStyle = "#393550";
	ctx.fillRect(0,0,w,h);
}

function gameloop () {
	window.requestAnimationFrame(gameloop);

	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	// console.log(deltaTime);

	drawBackGround();
	drawGirl();
	drawStars();
	aliveUpdate();
}

function drawGirl(){
	//drawImage(img，x,y)函数
	ctx.drawImage(girlPic,100,150,600,300);
}

function mousemove (e) {
	//获取鼠标的坐标
	if (e.offsetX || e.layerX) {
		var px = e.offsetX == undefined ? e.layerX  : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY  : e.offsetY;
		// console.log(px);
		if(px >100 && px < 700 && py > 150 && py < 450){
			switchy = true;
			// console.log(switchy);
		}else {
			switchy = false;
			// console.log(switchy);
		}
	}
}
