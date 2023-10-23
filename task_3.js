// ------------------- 1 --------------------

function createArray(start, end)
{
  let arrayForCreateArray = [];
  let i = start;
  while (i <= end)
  {
    arrayForCreateArray.push(i);
    ++i;
  }
  console.log(arrayForCreateArray);
}
let arr = createArray(2, 9);
console.log(arr);


// ------------------- 2 --------------------

for (let a = 1, b = 5; a <= b; a++)
{
  for (let i = 0; i < a; i++) {console.log(a);}
}


// ------------------- 3 --------------------

function randArray(k)
{
  let arrayForRandom = [];
  let i = 1;
  while (i <= k){
    let value = Math.floor(Math.random() * 500);
    arrayForRandom.push(value);
    ++i;
  }
  console.log(arrayForRandom);
}
randArray(5);

// ------------------- 4 --------------------

function compact(arr)
{
  let arrayForCompact = [];
  for(let i = 0; i < arr.length; ++i)
  {
    if(!arrayForCompact.includes(arr[i])) {
      arrayForCompact.push(arr[i]);
    }
  }
  return arrayForCompact;
}
const array41 = [5, 3, 4, 5,6,7,3];
const array42 = compact(array41);
console.log(array42) ; // [5,3,4,6,7]


// ------------------- 5 --------------------

function SortFunction(arr)
{
  let arrayForInt = [];
  let arrayForString = [];
  let arrFlat = arr.flat();
  for(let i = 0; i < arrFlat.length; ++i)
  {
    if(typeof(arrFlat[i]) === "number") {
      arrayForInt.push(arrFlat[i]);
    } else {
      arrayForString.push(arrFlat[i]);
    }
  }
  console.log(arrayForInt);
  console.log(arrayForString);
}
let  array51 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let array52 = SortFunction(array51);


// ------------------- 6 --------------------

function calc(a, b, op)
{
  if(op == 1) return a - b;
  else if(op == 2) return a * b;
  else if(op == 3 && b !== 0) return a / b;
  else return a + b;
}

console.log(calc(10, 3, 1));
console.log(calc(10, 3, 2));
console.log(calc(10, 3, 3)); 
console.log(calc(10, 0, 3)); 
console.log(calc(10, 3, 55));


// ------------------- 7 --------------------

function findUnique(arr)
{
  const elementCount = [];

  for (const element of arr) {
    if (elementCount[element]) {
      return false;
    } else {
      elementCount[element] = 1;
    }
  }
  return true;

}

console.log(findUnique([1, 2, 3, 5, 3]));  // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true