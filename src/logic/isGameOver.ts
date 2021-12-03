const isGameOver = (matrixData: Array<Array<number>>): boolean => {
  if (
    matrixData.filter((el) => el.filter((e) => e !== 0).length === 4).length !==
    4
  ) {
    return false;
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      if (matrixData[i][j] === matrixData[i + 1][j]) {
        return false;
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrixData[i][j] === matrixData[i][j + 1]) {
        return false;
      }
    }
  }
  return true;
};

export default isGameOver;
