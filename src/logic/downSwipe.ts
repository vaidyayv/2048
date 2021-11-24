import arrayTranspose from "./arrayTranspose";
import copy2D from "./copy2D";
import rightSwipe from "./rightSwipe";

const downSwipe = (matrixData: Array<Array<number>>) => {
    let matrixDataCopy: Array<Array<number>> = copy2D(matrixData);
    arrayTranspose(matrixDataCopy);
    matrixDataCopy = rightSwipe(matrixDataCopy);
    arrayTranspose(matrixDataCopy);
    return matrixDataCopy;
}

export default downSwipe;