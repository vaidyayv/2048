const copy2D = (data: Array<Array<number>>) => {
    let copy: Array<Array<number>> = [];
    data.forEach((element, index) => {
        copy.push([]);
        element.forEach(element => {
            copy[index].push(element);
        });
    });
    return copy;
}

export default copy2D;