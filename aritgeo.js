// A.P short for arithmetic progression
// G.P short for geometric progression


//function returns true if array is an A.P
function arithmetic(array){
	commonDiff = array[1] - array[0];
	for (var i = 0; i < array.length -1; i++) {
		if (commonDiff !== (array[i+1] - array[i])) {
			return false;
		}
	}
	return true;	

}

//function returns true if array is a G.P
function geometric(array){
	commonRatio = array[1] / array[0];
	for (var i = 0; i < array.length - 1; i++){
		if (commonRatio !== (array[i+1] / array[i])) {
			return false; 
		}
	}
	return true;
}

//function checks if its an array and is empty
function emptyArray(array){
	if ((array.constructor === Array ) && (array.length < 1 )){
		return true;
	}
	return false;
}



module.exports = {aritGeo: function(array){
					if (emptyArray(array)) {
							return 0;		
						}
					if (arithmetic(array)) {
							return "arithmetic";
						}
					if (geometric(array)) {
							return "geometric";
						}
					if (emptyArray(array)) {
							return 0;		
						}
					//not of any of the others
					return -1;
					}}