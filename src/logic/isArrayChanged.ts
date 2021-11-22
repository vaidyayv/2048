const isArrayChanged = (arr1: Array<Array<number>>, arr2: Array<Array<number>>): boolean => {
    for(let i=0; i< arr1.length; i++) {
        for(let j=0; j<arr1.length; j++) {
            if(arr1[i][j] !== arr2[i][j]){
                return true;
            }
        }
    }
    return false;
}

export default isArrayChanged;