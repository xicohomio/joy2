$(document).ready(function(){
speed=parseInt($('#txtspeed').val());
console.log(speed);
	$('#bt2').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left +speed;
		if (newpleft > 400) {
			newpleft = 400;
		}
		$b.css('left', newpleft + 'px');
	})

	$('#bt1').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left -speed;
		if (newpleft < 40) {
			newpleft = 40;
		}
		$b.css('left', newpleft + 'px');
	})

	$('#bt3').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top +speed;
		$b.css('top', newpleft + 'px');
		if (newpleft > 300) {
			newpleft = 300;
		}
	})

	$('#bt4').click(function(){
		speed=parseInt($('#txtspeed').val());
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top -speed;
		$b.css('top', newpleft + 'px');
		if (newpleft < 0) {
			newpleft = 0;
		}
	})
});