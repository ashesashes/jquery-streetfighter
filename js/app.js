//prevent jQuery from executing before the page has loaded

$(document).ready(function(){
	//if user hovers over the .ryu div, then show ready state
	// and hide the "still" state. else do nothing
	$('.ryu').mouseenter(function(){
		//alert('mouse entered .ryu div');
       $('.ryu-still').hide();
       $('.ryu-ready').show();
	})
    .mouseleave(function(){
		//alert('mouse exited, resume stillness');
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

    // if mousedown is detected, ryu leans forward
    $('.ryu').mousedown(function(){
    	//console.log('the earth moved');
    	//play hadouken sound
    	playHadouken();

    	$('.ryu-throwing').show();
    	$('.ryu-ready').hide();

    	//show hadouken and animate to the right of the screen
    	//once the hadouken reaches the right of the screen 
    	//make it disappear
    	//finally, the next animation should trigger after the 
    	//previous animation has finished
    	$('.hadouken').finish().show()
    	.animate({
    		left: 1020,
    		opacity: 75
    	}, 500, 
    		function() {
    		$(this).hide();
    		$(this).css('left', '520px');
    	}
    	);
    

    })
    .mouseup(function(){
    	//console.log('still waters run deep');

    	// return ryu to his ready state
    	$('.ryu-ready').show();
    	$('.ryu-throwing').hide();
    	$('.hadouken').hide();

    });
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

