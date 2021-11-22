const arrayTranspose = (arr: Array<Array<number>>) => {
    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < 4; j++) {
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
        }
    }
}

export default arrayTranspose;