function attachEventsListeners( ) {
	let daysBtn=document.getElementById('daysBtn');
	let hoursBtn=document.getElementById('hoursBtn');
	let minutesBtn=document.getElementById('minutesBtn');
	let secondsBtn=document.getElementById('secondsBtn');

	daysBtn.addEventListener('click', function ( ) {
		document.getElementById('hours').value=document.getElementById('days').value*24;
		document.getElementById('minutes').value=document.getElementById('days').value*1440;
		document.getElementById('seconds').value=document.getElementById('days').value*86400;
	})
	hoursBtn.addEventListener('click',function ( ) {
		document.getElementById('days').value = document.getElementById('hours').value / 24;
		document.getElementById('minutes').value = document.getElementById('hours').value * 60;
		document.getElementById('seconds').value = document.getElementById('hours').value * 60*60;
	})
	minutesBtn.addEventListener('click',function ( ) {
		document.getElementById('days').value = document.getElementById('minutes').value /1440;
		document.getElementById('hours').value = document.getElementById('minutes').value / 60;
		document.getElementById('seconds').value = document.getElementById('minutes').value *60;
	})
	secondsBtn.addEventListener('click',function ( ) {
		document.getElementById('days').value = document.getElementById('seconds').value *0.0000115741;
		document.getElementById('hours').value = document.getElementById('seconds').value / 60/60;
		document.getElementById('minutes').value = document.getElementById('seconds').value /60;
	})
}