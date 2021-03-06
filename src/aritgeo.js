// A.P short for arithmetic progression
// G.P short for geometric progression


// function returns true if array is an A.P
const arithmetic = (array) => {
    let commonDiff = array[1] - array[0];
    for (let i = 0; i < array.length -1; i++) {
        if (commonDiff !== (array[i+1] - array[i])) {
            return false;
        }
    }
    return true;	

}

// function returns true if array is a G.P
const geometric = (array) => {
    let commonRatio = array[1] / array[0];
    for (let i = 0; i < array.length - 1; i++){
        if (commonRatio !== (array[i+1] / array[i])) {
            return false; 
        }
    }
    return true;
}

// function checks if its an array and is empty
const emptyArray = (array) => {
    if ((array.constructor === Array ) && (array.length < 1 )){
        return true;
    }
    return false;
}




const aritGeo = (array) => {
        if (emptyArray(array)) {
            return 0;		
        }
        if (arithmetic(array)) {
            return "arithmetic";
        }
        if (geometric(array)) {
            return "geometric";
        }
        //return -1 for neither
        return -1; 
    }

export { aritGeo };