const removeFromArray = function(array, ...removeElement) {
   
    return array.reduce((acc,curr) => {
        if (!removeElement.includes(curr)){
            acc.push(curr);
        }
        return acc;
    }, []);
};
console.log(removeFromArray([1, 2, 3, 4], [3]))
// Do not edit below this line
module.exports = removeFromArray;
