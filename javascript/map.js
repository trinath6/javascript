// Write a function that takes an array of numbers and uses forEach to print each element multiplied by 2

// arr=[2,3,4,5,6,7,8,8]

// arr.forEach(t => {
//     console.log(t*2)
    
// });



// Create a function that accepts an array of strings and uses forEach to capitalize the first letter of each string.
// let arr=["hello","hai","kajfn","akh"]

// arr.forEach((a)=>{
//     //   arr2=arr[0][0].toUpperCase()
//     //   console.log(a.charAt(0).toUpperCase) 
//     y=a.charAt(0).toUpperCase()+a.slice(1);
//     console.log(y)
// })


// Implement a function that takes an array of objects representing students (with name and age properties) and uses forEach to print out the names of students who are over 18 years old.
// arr=[{
//     name:"trinath",
//     age:22}
//     ,{
//         name:"saikiran",
//         age:23
//     },
//     {
//         name:"sunny",
//         age:18
//     }
// ]
// // let arr=[1,2,3,4,4]
// let k=arr.forEach((a,n)=>{
//   if(a.age<=18)
//   {
//     console.log(a)
//   }
// })

// Write a function that takes an array of numbers and uses forEach to calculate the sum of all the numbers in the array.
// arr=[1,2,3,4,5]
// let k=arr.reduce((a,b)=>a+b)
// console.log(k)


//Create a function that takes an array of words and uses forEach to count the number of letters in each word, then returns an array of these counts.
arr=["hello","iam","trinath","reddy"]
c=[]
let k=arr.forEach((a,b)=>{
    c=c+a.length()
   console.log(a)


})
console.log(c)

