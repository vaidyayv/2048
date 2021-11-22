const shiftZeroes = (arr: Array<number>): Array<number> => {
    let el: Array<number> = []
    arr.forEach(element => {
        if(element !== 0){
            el.push(element);
        }
    });
    let diff = arr.length - el.length;
    for(let i=0; i< diff; i++) {
        el.push(0);
    }
    return el;
}

export default shiftZeroes;