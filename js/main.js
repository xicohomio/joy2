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
		if (newpleft < 150) {
		$b.animate({ "top": "+=" + speed + "px"},"slow");
	}
	}

	function moveup(){
				speed=parseInt($('#txtspeed').val());
		position = $b.position();
		newpleft = position.top -speed;
		if (newpleft > 150) {
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
});