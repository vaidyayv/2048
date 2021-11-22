import copy2D from "./copy2D";

const insertRandom = (matrixData: Array<Array<number>>): Array<Array<number>> => {
    let matrixDataCopy: Array<Array<number>> = copy2D(matrixData);
    while(1) {
        let i = getIndex(Math.random());
        let j = getIndex(Math.random());
        if(matrixDataCopy[i][j] === 0){
            matrixDataCopy[i][j] = 2;
            break;
        }
    }
    return matrixDataCopy;
}

const getIndex = (num: number): number => {
    if(num < 0.25) {
        return 0;
    }
    if(num < 0.5) {
        return 1;
    }
    if(num < 0.75) {
        return 2;
    }
    return 3;
}

export default insertRandom;