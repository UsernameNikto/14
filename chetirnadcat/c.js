function getResult(a) {
    var s = 0;
    for (let i = 0; i < a.length; i++) {
        s = s + a[i];
    }
    return s;
}
console.log(getResult([1, 3, 5]), "==", 9)
console.log(getResult([-4, 27, -5]), "==", 18)
console.log(getResult([-3, -8, -17]), "==", -28)