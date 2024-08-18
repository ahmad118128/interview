function averageArray(Arr) {

    const average = Arr.reduce((total, current) => total += current) / Arr.length;

    return average;
}