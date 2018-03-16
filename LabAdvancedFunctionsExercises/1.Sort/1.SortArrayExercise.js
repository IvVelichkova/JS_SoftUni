	function sortArray(arr,sortMethod) {
	if(sortMethod==='asc'){
	    return arr.sort((a,b)=>{return a-b})
	  }else {
		return arr.sort((a,b)=>{return b-a})

	}

}

sortArray([14,7,17,6,8],'asc')