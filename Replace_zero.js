//replace all 0's in the integer with 1
const n1 = 65020130
console.log("Before Operations: "+n1);

//Method 1
var n2 = n1,result = ""
while (n2 > 0) {
    
if (n2 % 10 == 0) {
    result = 1 + result
} else {
    result = n2 % 10 + result 
}
    n2 = Math.floor(n2/10)
}
console.log("After Operations: "+result+"\n");

//Method 2 in this the integer is converted to string and 0's are replaced with 1
var result2 = n1.toString().replace(/0/g,'1')
console.log("After Operations: "+result2);


