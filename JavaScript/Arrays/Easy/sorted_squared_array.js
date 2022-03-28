//My solution

function sortedSquaredArray(array) {
  // Write your code here.
  return array.map((x) => x**2).sort((a,b) => a - b);
}

//Solution #2 with some hints

function sortedSquaredArray(array) {
  // Write your code here.
	let result = new Array(array.length).fill(0);
	let start = 0;
	let end = array.length - 1;
	
	for(let i = array.length - 1; i >= 0; i--){
		const smallVal = array[start]
		const largeVal = array[end]
		if(Math.abs(smallVal) > Math.abs(largeVal)){
			result[i] = smallVal * smallVal
			start++
		}
		else{
			result[i] = largeVal * largeVal;
			end--
		}
	}
	
  return result;
}