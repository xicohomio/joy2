$(document).ready(function(){
speed=parseInt($('#txtspeed').val());
console.log(speed);
	
	$('#bt2').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left +speed;
		if (newpleft < 500) {
		$b.animate({ "left": "+=" + speed + "px"},"slow");	
		//$b.css('left', newpleft + 'px');
		}
		})

	$('#bt1').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left -speed;
		if (newpleft > 40) {
		$b.animate({ "left": "-=" + speed + "px"},"slow");
		//$b.css('left', newpleft + 'px');
	}
	})

	$('#bt3').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top +speed;
		//$b.css('top', newpleft + 'px');
		if (newpleft < 150) {
		$b.animate({ "top": "+=" + speed + "px"},"slow");
		}
	})

	$('#bt4').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top -speed;
		//$b.css('top', newpleft + 'px');
		if (newpleft > 150) {
		$b.animate({ "top": "-=" + speed + "px"},"slow");
	}
	})
});