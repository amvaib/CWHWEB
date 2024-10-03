let arr = [5,9,99,45,67]

// arr.forEach((value,index,array) => {
//         console.log(value, index ,array);
        
    
// });


// for (const element of arr) {
//     console.log(element);
    
// }


// let newArr = arr.map(e =>{
//     console.log(e);

// })

// const greaterThanSeven = (e=>{
//     if(e>7){
//         return true;
//     }
//     else return false;
// })


//filters out according to conditions and creates a new array;

// console.log(arr.filter(greaterThanSeven));


let arr2 = [1,2,3,4,5,6,7];
const red = (a,b)=>{
    return a+b;
}

console.log(arr2.reduce(red));

