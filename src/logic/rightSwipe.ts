import arrayMirror from "./arrayMirror";
import copy2D from "./copy2D";
import leftSwipe from "./leftSwipe";

const rightSwipe = (matrixData: Array<Array<number>>) => {
    let matrixDataCopy: Array<Array<number>> = copy2D(matrixData);
    arrayMirror(matrixDataCopy);
    matrixDataCopy = leftSwipe(matrixDataCopy);
    arrayMirror(matrixDataCopy);
    return matrixDataCopy;
}

export default rightSwipe;