function delimiter( arr ) {
	let gold=arr.split(', ')
	let bitCoinLv=11949.16
	let goldinLv=67.51
	let currentTotalSUm=0
	let bitCoin=0
	let day=0
	let firstbitcoinTotal=0

	 for (let i = 0; i < gold.length; i++) {
	         let oneGold = Number(gold[i])
	         currentTotalSUm=oneGold*goldinLv

		 if(i==2){
currentTotalSUm*=0.70
		   }
		 if(currentTotalSUm>=bitCoinLv ){
	         	if( day==0) {
		            while (currentTotalSUm >= bitCoinLv) {
			            currentTotalSUm -= bitCoinLv
			            bitCoin++
			            firstbitcoinTotal=bitCoin
		            }
	            }else {
		            while (currentTotalSUm >= bitCoinLv) {
			            currentTotalSUm -= bitCoinLv
			            bitCoin++
	            }
		   }

	     }

console.log(`Bitcoins bought: ${bitCoin}`)
		 if(day!=0){
		     console.log(`Day of the first purchased bitcoin: ${firstbitcoinTotal}`)
		   }
		   console.log(`Money left: ${currentTotalSUm} lv.`)
}


delimiter(['50', '100'])