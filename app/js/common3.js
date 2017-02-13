function circle()
{
	var Ball = function() {
		this.x1 = 300;
		this.x2 = 870;
		this.yStart = 0;
		this.y = 0;
		this.ySpeedStart = 51;
		this.radius = 45;
		this.count = 0; 
		this.heightNew = 0;
		this.mult = 1.2;
	};	

	var Box = function() {
		this.xStart = 1040;
		this.yStart = 600;
		this.y = 0;
		this.y = 0;
		this.w = 100;
		this.rect = 0;
		this.correctX = 0;
		this.correctY = 0;
	}

	imgBox = new Image();
	imgBox.src="js/cubetexture.png"

	var box1 = function(x, y, w) {
		obCanvas.drawImage(imgBox, x, y, w, w);
	}

	Box.prototype.draw = function() {
		box1(this.xStart, this.yStart, this.w);
	}

	var p = 0;

	Box.prototype.rotate = function() {
		if (this.rect <= 0 & this.rect > -180) {
			obCanvas.save();
			this.correctX = 0;
			obCanvas.translate(this.xStart + this.correctX, this.yStart + this.correctY);
			obCanvas.rotate((this.rect * Math.PI) / 360);
			box1(0, -this.w, this.w);
			this.rect -= 25
			console.log(this.rect);
			obCanvas.restore();
		}

		if (this.rect <= -180 & this.rect > -360) {
			obCanvas.save();
			this.correctX = -this.w;
			obCanvas.translate(this.xStart + this.correctX, this.yStart + this.correctY);
			obCanvas.rotate((this.rect * Math.PI) / 360);
			box1(0, 0, this.w);
			this.rect -= 20
			console.log(this.rect);
			obCanvas.restore();
		}

		if (this.rect <= -360 & this.rect > -540) {
			obCanvas.save();
			this.correctX = - 2 * this.w;
			obCanvas.translate(this.xStart + this.correctX, this.yStart + this.correctY);
			obCanvas.rotate((this.rect * Math.PI) / 360);
			box1(-this.w, 0, this.w);
			this.rect -= 15
			console.log(this.rect);
			obCanvas.restore();
		}

		if (this.rect <= -540 & this.rect > -720) {
			obCanvas.save();
			this.correctX = - 3 * this.w;
			obCanvas.translate(this.xStart + this.correctX, this.yStart + this.correctY);
			obCanvas.rotate((this.rect * Math.PI) / 360);
			box1(-this.w, -this.w, this.w);
			this.rect -= 10
			console.log(this.rect);
			obCanvas.restore();
		}

		if (this.rect <= -720 & this.rect > -900) {
			obCanvas.save();
			this.correctX = - 4 * this.w;
			this.rect -= 5
			obCanvas.translate(this.xStart + this.correctX, this.yStart + this.correctY);
			obCanvas.rotate((this.rect * Math.PI) / 360);
			box1(0, -this.w, this.w);
			console.log(this.rect);
			obCanvas.restore();
		}

		if (this.rect <= -900) {
			obCanvas.save();
			obCanvas.translate(this.xStart + this.correctX, this.yStart + this.correctY);
			obCanvas.rotate((this.rect * Math.PI) / 360);
			box1(0, -this.w, this.w);
			obCanvas.restore();
		}

	}

	var korob = new Box();

	var circle1 = function(x1, yStart, radius) {
		obCanvas.beginPath();
		obCanvas.arc(x1, yStart, radius, 0, 2*Math.PI, false);
		obCanvas.fillStyle = '#FFA500';
		obCanvas.fill();
		obCanvas.lineWidth = 1;
		obCanvas.strokeStyle = '#FFA500';
		obCanvas.stroke();
	};

	var circle2 = function(x2, yStart, radius) {
		obCanvas.beginPath();
		obCanvas.arc(x2, yStart, radius, 0, 2*Math.PI, false);
		obCanvas.fillStyle = '#4AAAD2';
		obCanvas.fill();
		obCanvas.lineWidth = 1;
		obCanvas.strokeStyle = '#4AAAD2';
		obCanvas.stroke();
	};

	var x = 0;

	Ball.prototype.draw = function() {
		if (this.count == 0) {
			circle1(this.x1, this.yStart, this.radius);
			circle2(this.x2, this.yStart, this.radius);
		} else {
			x++;
			if (x == 1) {
				this.y = this.yStart
			}
			circle1(this.x1, this.y, this.radius);
			circle2(this.x2, this.y, this.radius);
		}
	}

	Ball.prototype.move = function() {
		if (this.count == 0) {
			this.yStart += this.ySpeedStart;
		} else {
			this.y += this.ySpeedStart;
		}
	}

	Ball.prototype.checkCollision = function() {
		if (this.yStart + this.ySpeedStart > height - this.radius * this.mult) {
			this.yStart = height - this.radius;
		}

		if (this.y + this.ySpeedStart > height - this.radius * this.mult) {
			this.y = height - this.radius;
		}

		if (this.y + this.ySpeedStart < this.heightNew + this.radius * this.mult) {
			this.y = this.heightNew + this.radius;
		}

		if (this.count == 0 & (this.yStart == height - this.radius)) {
			this.ySpeedStart = - this.ySpeedStart;
			this.count += 1;
			this.heightNew += (height - 2*this.radius)/4; 
		}
		if (this.count > 0 & this.count < 4 & (this.y == height - this.radius)) {
			this.ySpeedStart = - this.ySpeedStart;
			this.ySpeedStart +=20;
			this.heightNew += (height - 2*this.radius)/4; 
			this.count +=1;
		}
		if (this.count > 0 & this.count < 4 & (this.y == this.heightNew + this.radius))
			this.ySpeedStart = - this.ySpeedStart;
	};

	var canvas = document.getElementById('sphere');
	var obCanvas = canvas.getContext('2d');
	var bark = new Image();
	bark.src ="js/cubetexture.png";

	var ball = new Ball();
	var width = canvas.width;
	var height = canvas.height;
	var fps = 50;

	imgBox.onload = function() {
		var timerId = setInterval(function() {
			obCanvas.clearRect(0, 0, width, height);
			korob.rotate();
			ball.draw();
			ball.move();
			ball.checkCollision();
		}, fps);
			setTimeout(function(){clearInterval(timerId)}, 4000)
	};

	// var timerId2 = setInterval(function() {
	// 	obCanvas.clearRect(0, 0, width, height);
	// 	korob.rotate();
	// }, 100)

}