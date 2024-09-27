function sumaKwadratow(arr) {
    let sum = 0; 

    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 2); 
    }

    return sum; 
}

const result = sumaKwadratow([0, 1, 2, 3, 4, 5]);
console.log("Suma kwadratów:", result);
