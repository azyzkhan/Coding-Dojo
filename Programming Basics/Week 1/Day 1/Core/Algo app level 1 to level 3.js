// Level 1 //
// Activity 1 //
var x = 5;
console.log(x);
// 5 // 

// Activity 2 //
var x = 3;
x = x+1;
console.log(x)
// 4 //

// activity 3 // 
var x = 3;
x = x+2;
console.log(x+2);
console.log(x);
// 7,5 // 

// Activity 4 //
var x = 3;
x = x*x;
console.log(x);
console.log(x*2);
// 9,18 //

// Activity 5 //
 var x = 2;
var y = 5;
var z = x+y;
console.log(z);
// 7 //

// Level 2 //
// Activity 1 //
var x = [1,2,4];
console.log(x);
// [1,2,4] //

// Activity 2 //
var x = [1,3,5];
console.log(x[0]);
// 1 //

// Activity 3 //
var x = [2,4,6];
console.log(x[1]);
// 4 //

// Activity 4 //
var x = [1,3,5];
console.log(x[2]);
// 5 //

// Activity 5 //
var x = [1.3];
console.log(x[0]);
// 1.3 //

// Activity 6 //
 var x = [1,2,4];
 x[0] = x[1];
 console.log(x);
 // [2,2,4] //

 // Activity 7 // 
 var x = [1,3,5];
 var y = x.length;
 console.log(y);
 // 3 //

 // Activity 8 //
 var x = [2,4,6,3,7]
 var y = x.length - 2;
 console.log(x[y]);
 // 3 //

 // Activity 9 //
 var x = [2,4,6,3,7];
 var y = x.length;
 console.log(x[y-1]);
 // 7 //

 // Activity 10 //
 var x = [1,3,5,7];
 x[0] = x[x.length-2];
 console.log(x);
 // [5,3,5,7] //

 // Activity 11 //
 var x = [1,3,5,7];
 x[x.length-3] = x[x.length/2+x.length/4];
 console.log(x);

// [1,7,5,7] // 

// Activity 12 //
var x = [1,3,5,7];
var y = [2,4,6];
x[2] = y[x.length-3];
console.log(x);
// [1,3,4,7] //

// Activity 13 //
var x = [1,3,5,7];
var y = [2,4,6];
x[2] = y[x.length-3] + x[ x[0] + y[0] ];
console.log(x);
// [1,3,11,7]

// Level 3 //
// Activity 1 //
var x = [1,3,5];
x[0] = x[2];
x[1] = x[0];
console.log(x);
// [5,5,5]

// Activity 2 //
var x = [1,3,5];
var y = [0,5,7];
x [0] = x[1] + y[2];
y[1] = y[2] - x[0];
console.log(x);
// [10,3,5] //

// Activity 3 //
var x = [1,3,5,8];
x[0] = x[x.length-1];
console.log(x);
// [8,3,5,8] // 

// Activity 4 //
var x = [1,3,5,8];
var temp = x[x.length-1];
x[x.length-1] = x[0]
console.log(x);
// [1,3,5,1]

// Activity 5 //
var x = [1,3,5,8];
var temp = x[x.length-1]
x[x.length-1] = x[0];
x[0] = temp;
console.log(x);
// 8,3,5,1 //

// Activity 6 //
var x = [1,3,5,8];
x.pop();
x.push(7);
console.log(x);
// [1,3,5,7] //

// Acitivty 7 //
var x = [1,3,5];
x[0] = 15;
x[3] = 77;
console.log(x);

// [15,3,5,77] //

//Activity 8 //
var x = [1,3,5,8,-5,-8];
x[0] = x[x.length-1];
x[x.length-1] = x[0];
console.log(x);
// [-8,3,5,8,-5,-8] //

// Activity 9 //
var x = [1,3,5,8,2,-5,-8];
var temp = x[x.length-1];
x[x.length-1] = x[0];
x[0] = temp;
console.log(x);
// [-8,3,5,8,2,-5,1] //

// Activity 10 //
var x = [1,3,5];
x.push(7);
console.log(x);
// [1,3,5,7] //

// Activity 11 //
var x = [2,4,6];
x.push(3);
console.log(x);
// [2,4,6,3]

// Activity 12 //
var x = [1,3,5];
var y = x[0]+x[1];
x.push(y);
console.log(x);
// [1,3,5,4] // 

// Activity 13 //
var x = [2,3,5];
x.push(x[0]+x[1]);
console.log(x);

// [2,3,5,5] // 

 // Activity 14 //
 var x = [1,3,5];
 x.pop();
 console.log(x);
// [1,3] // 

// Activity 15 //
var x = [1,3,5];
x.push(2);
x.pop();
console.log(x)