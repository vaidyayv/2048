import copy2D from "./copy2D";
import merge from "./merge";

const leftSwipe = (matrixData: Array<Array<number>>) => {
    let matrixDataCopy: Array<Array<number>> = copy2D(matrixData);
    let matrix: Array<Array<number>> = []
    matrixDataCopy.forEach((element, index) => {
        matrix.push(merge(element));
    })
    return matrix;
}

export default leftSwipe;