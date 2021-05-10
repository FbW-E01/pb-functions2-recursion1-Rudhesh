// Recursion
// sum(array)  // return 21

function sum(array) {
    if (array.length === 0) {
        return array;
    }

    else{
        return array.reduce(function(accumulator, current) {
            return accumulator + current;
        });
    }
    
}

const array = [1, 2, 3, 4, 5, 6]

console.log(sum(array));