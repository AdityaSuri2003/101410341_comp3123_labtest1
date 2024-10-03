function lowerCaseWords(mixedArray){
    return new Promise((resolve,reject) => {
        if(!Array.isArray(mixedArray)) {
            reject("input is not an array");

        }
        const filteredArray = mixedArray
        .filter(item => typeof item === 'string')
        .map(word => word.toLowerCase());

        resolve(filteredArray);
    });
}

const mixedArray = ["HELLO", 42, "WORLD", true, "JAVASCRIPT"];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(erro => console.log(error));