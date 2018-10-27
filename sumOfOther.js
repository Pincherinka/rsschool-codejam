function sumOfOther(array) {

    let result = [];

    for (i = 0; i < array.length; i ++) {
        result[i] = array.reduce((acc, item) => acc += item) - array[i];
    }
    return result;
}
