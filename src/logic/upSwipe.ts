import arrayTranspose from "./arrayTranspose";
import copy2D from "./copy2D";
import leftSwipe from "./leftSwipe";

const upSwipe = (matrixData: Array<Array<number>>) => {
    let matrixDataCopy: Array<Array<number>> = copy2D(matrixData);
    arrayTranspose(matrixDataCopy);
    matrixDataCopy = leftSwipe(matrixDataCopy);
    arrayTranspose(matrixDataCopy);
    return matrixDataCopy;
}

export default upSwipe;