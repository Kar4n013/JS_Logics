//Rotate array left by d positions

let arr = [2, 4, 6, 8, 9, 7, 24, 15];
const d = 5,
  n = arr.length;

console.log("Before Left rotation: \n" + arr);

for (let i = 0; i < d; i++) {
  let temp = arr[0];

  for (let j = 0; j < n-1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[n-1] = temp;
}

console.log(arr);

