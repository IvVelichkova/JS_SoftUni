function printArr(arr) {
    let curresntR = 0
    let nextR = 0
    let currentSumR = 0
    let nextRsum = 0

    let currentCol = 0
    let currentColSum = 0
    let nextCol = 0
    let nextColSum = 0
    for (let row = 0; row < arr.length - 1; row++) {

        curresntR = arr[row]
        nextR = arr[row + 1]
        currentSumR = curresntR++
        nextRsum = nextR++
        for (let col = 0; col < arr[row].length; col++) {
            currentCol = arr[row][col]
            currentColSum = currentCol++
            nextCol = arr[row + 1][col + 1]
            nextColSum = nextCol++
        }
    }


    if (currentSumR === nextRsum, currentColSum, nextColSum) {
        console.log('true')

    }
    else
        console.log('false')

}

//let arr=[
//    'Deny',
//    'omen',
//    'test',
//    'Default']

printArr([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])
