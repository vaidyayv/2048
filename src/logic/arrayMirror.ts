const arrayMirror = (arr: Array<Array<number>>) => {
    arr.forEach(element => {
        [element[0], element[3]] = [element[3], element[0]];
        [element[1], element[2]] = [element[2], element[1]];
    });
}

export default arrayMirror;