$(document).ready(function(){

	$('#bt2').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left +10;
		if (newpleft > 400) {
			newpleft = 400;
		}
		$b.css('left', newpleft + 'px');
	})

	$('#bt1').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.left -10;
		if (newpleft < 40) {
			newpleft = 40;
		}
		$b.css('left', newpleft + 'px');
	})

	$('#bt3').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top +10;
		$b.css('top', newpleft + 'px');
		if (newpleft > 300) {
			newpleft = 300;
		}
	})

	$('#bt4').click(function(){
		$b = $( "#boneco" );
		position = $b.position();
		newpleft = position.top -10;
		$b.css('top', newpleft + 'px');
		if (newpleft < 0) {
			newpleft = 0;
		}
	})
});