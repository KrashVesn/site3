function box() {
	var rectX = 100, rectY = 100, rectW = 100, rectH = 100, rectangle = 45;
	
	var canvas = document.getElementById('sphere');
	var obCanvas = canvas.getContext('2d');

	// obCanvas.fillStyle = '#8080FF';
	// obCanvas.fillRect(0,0,300,300);

	img = new Image();
	img.src="cubetexture.png"

	var dl = 10;
	// obCanvas.drawImage(img, 0, 0, dl, dl);

	var beta = (10*Math.PI) / 360;
	var bet = 0;
	var x = 100;
	var y = 100;
	setTimeout(function() {
		bet+=beta;
		obCanvas.clearRect(0, 0, obCanvas.width, obCanvas.height);
		obCanvas.save();
		obCanvas.translate(x,y);
		obCanvas.rotate(bet);
		obCanvas.drawImage(img, -dl/2, -dl/2, 100, 100);
		obCanvas.restore();
		setTimeout(arguments.callee,10);
	},0);



}