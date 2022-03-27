// My broken solution

function isValidSubsequence(array, sequence) {
  // Write your code here.
	const hash = {}
	if(sequence.length > array.length){
		return false
	}
	
	for(let num of array){
		hash[num] = true
	}
	
	for(let i = 0;i<sequence.length;i++){
		if(hash[sequence[i]] === true){
			continue
		}
		else{
			return false
		}
	}
	return true
}

// My fixed solution

function isValidSubsequence(array, sequence) {
  // Write your code here.
	let arrayPointer = 0
	let sequencePointer = 0
	
	while(sequencePointer < sequence.length){
		if(arrayPointer > array.length){
			return false
		}
		if(array[arrayPointer] === sequence[sequencePointer]){
			sequencePointer++
			arrayPointer++
		}
		else{
			arrayPointer++
		}
	}
	return true
	
}