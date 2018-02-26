function timer() {
	let hours = $('#hours');
	let minutes =$('#minutes');
	let sec = $('#seconds');
	let startBtn = $('#start-timer');
	let interval = null;
	startBtn.on('click', function () {
		if(interval){
		    clearInterval(interval);
		  }
			interval = setInterval(updateTime, 1000)
		});
	$('#stop-timer').on('click',function (){
		clearInterval(interval);
		interval=null;
	});

	function updateTime() {
		let secVal=sec.text();
		let minVal=minutes.text();
		let hoursVal=hours.text();

		sec.text(('0'+(+secVal+1)).slice(-2));

			if (secVal >= 59) {
				sec.text('00');

				minutes.text(('0'+(+minVal+1)).slice(-2));

				if(minVal >=59) {
					minutes.text('00');

					hours.text(('0'+(+hoursVal+1)).slice(-2));


				}
			}

	}
}