function SredneeArfmeticheskoe(arr) {
    let summa = 0;
    for (let i = 0; i < arr.length; i++) {
        summa += arr[i];
    }
    return summa / arr.length;
}
console.log(SredneeArfmeticheskoe([2, 1, 4, 1]), "дня");
console.log(SredneeArfmeticheskoe([4, 2, 4, 5]), "дня");
console.log(SredneeArfmeticheskoe([2, 2, 4, 1]), "дня");
console.log(SredneeArfmeticheskoe([2, 2, 4, 1, 3]), "дня");