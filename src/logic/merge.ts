import shiftZeroes from "./shiftZeroes";

const merge = (arr: Array<number>): Array<number> => {
    let shiftedArr: Array<number> = shiftZeroes(arr);
    // merging process
    if(shiftedArr[0] === shiftedArr[1]){
        shiftedArr[0] = shiftedArr[0] * 2;
        shiftedArr[1] = 0;
    }
    if(shiftedArr[1] === shiftedArr[2]){
        shiftedArr[1] = shiftedArr[1] * 2;
        shiftedArr[2] = 0;
    }
    if(shiftedArr[2] === shiftedArr[3]){
        shiftedArr[2] = shiftedArr[2] * 2;
        shiftedArr[3] = 0;
    }
    shiftedArr = shiftZeroes(shiftedArr);
    return shiftedArr
}

export default merge;