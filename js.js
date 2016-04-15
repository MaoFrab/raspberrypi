$( document ).ready(function() {
	
	var memory = {
		'go_ahead':false,
		'go_back' :false,
		'right'	  :false,
		'left'	  :false
		}; 

	$('.go_ahead').click(function(e){
		$(this).toggleClass('go_ahead_on');

		var id = $(this).attr('id');

		if(!memory[id])
		{
			memory[id] = true;
			send_data(id, 1);
			console.log("iiiii "+id);
		}
		else
		{
			memory[id] = false;
			send_data(id, 0);
		}
		console.log(memory);

	});
});

function send_data(id, state){
	var id_send = 0;
	
	switch(id)
	{
		case 'go_ahead':
			id_send = 0;
			break;
		case 'go_back':
			id_send = 1;
			break;
		case 'right':
			id_send = 2;
			break;
		case 'left':
			id_send = 3;
			break;								
	}

	switch(true)
	{
		case /pin_/.test(id):
			id_send = id.split('_')[1];
			
			break;	
	}

	if(id_send == 0)
		console.log('worng code');
	else
	{
		$.ajax({
		  type: "POST",
		  url: "send.php",
		  data: "id="+id_send+'&state='+state,
		  success: function(msg){
		    console.log(msg);
		  }
		});
	}
}

