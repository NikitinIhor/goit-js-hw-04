'use strict'

function isEnoughCapacity(products, containerSize) {

    let values = Object.values(products);

    let sum = 0;

    for( let value of values) {
        sum += value;
    };

    if(sum <= containerSize) return true;
    return false;
    
}

console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  );
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  );
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  );
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  );
