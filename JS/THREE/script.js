let arr = [1,2,3,4,5,6,7,8,9,10];

// const factorial = ((a,b)=>{
//     return a*b;
// })

// console.log(arr.reduce(factorial));



let ans = 1;
for (let i = 0; i <arr.length; i++) {
        ans = arr[i]*ans;
        console.log(ans);


}







