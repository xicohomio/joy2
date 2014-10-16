$(document).ready(function(){
speed=parseInt($('#txtspeed').val());
console.log(speed);
$b = $( "#boneco" );


	function moveRight(){
		speed=parseInt($('#txtspeed').val());
		position = $b.position();
		newpleft = position.left +speed;
		if (newpleft < 500) {
			$b.animate({ "left": "+=" + speed + "px"},"slow");	
		}
	}
	
	function moveLeft(){
		speed=parseInt($('#txtspeed').val());
		position = $b.position();
		newpleft = position.left -speed;
		if (newpleft > 40) {
			$b.animate({ "left": "-=" + speed + "px"},"slow");
		}	
	}

	function movedown(){
		speed=parseInt($('#txtspeed').val());
		position = $b.position();
		newpleft = position.top +speed;
		if (newpleft < 400) {
			$b.animate({ "top": "+=" + speed + "px"},"slow");
		}
	}

	function moveup(){
		speed=parseInt($('#txtspeed').val());
		position = $b.position();
		newpleft = position.top -speed;
		if (newpleft > 50) {
			$b.animate({ "top": "-=" + speed + "px"},"slow");
		}
	}

	$('#bt2').click(function(){
		moveRight();
		
	})

	$('#bt1').click(function(){
		moveLeft();	
	
	})

	$('#bt3').click(function(){
		movedown();
		
	})

	$('#bt4').click(function(){
		moveup();
	
	})

	document.onkeydown = checkKey;
	function checkKey (e) {
		e = e || window.event;
		if (e.keyCode == '39')  {
			moveRight()
		}
		else if (e.keyCode == '40') {
			movedown()
		}
		else if (e.keyCode == '37') {
			moveLeft()
		}
		else if (e.keyCode == '38') {
			moveup()
		}
	}

	});