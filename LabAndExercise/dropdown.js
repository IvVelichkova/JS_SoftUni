function addItem(){
		let newOption=document.createElement('option');
		let res=document.getElementById('menu');
		newOption.value=document.getElementById('newItemValue').value;
		newOption.text=document.getElementById('newItemText').value;
		res.appendChild(newOption);
		document.getElementById('newItemValue').value='';
		document.getElementById('newItemText').value='';
	}
