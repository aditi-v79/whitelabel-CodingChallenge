export function calculateDenominations(payment, cost){
    //array of denominations in cents
    const denominations=[10000,5000,2000,1000,500,100, 25,10,5, 1];

    if (payment < cost) {
        return new Array(10).fill(0); // Return an array of zeros
      }

    // cost,change and payments variables 
    let change= payment - cost;

    //Initialize the result array with Os
    const changeArray = new Array(denominations.length).fill(0);


    //Find the quantities of denominations for the given change
    for (let i = 0; i < denominations.length; i++) {
        let denom = denominations[i];
        let count = Math.floor(change / denom);
        changeArray[i] = count;
        change -= count * denom;
    }

return changeArray;

}

// An example : 50-23.76 = 26.24 . Should return [ 0, 0, 1, 0, 1, 1, 0, 2, 0, 4]
console.log(calculateDenominations(8000,5376));