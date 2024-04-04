
// let s= "";
// for (i =0; i<=5; i++)
//  {
//   for (j =0; j<=i; j++) {
//     s=s+String.fromCharCode(j + 65);
//   }
//   s=s+"\n";
// }
// console.log(s);


let str="";
// let s=""
for(i=0;i<5;i++)
{
   str=""
    for (j=0; j<=i; j++) 
    {     
      str=str+String.fromCharCode(j + 65);
    //   console.log(j);
    //   str=str+"*"    
    }
    console.log(str)
}



