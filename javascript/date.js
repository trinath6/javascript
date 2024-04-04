// const minutes=new Date().getMinutes()
// console.log(dt)

const seconds=new Date().getSeconds()
console.log(seconds)

const day=new Date().getDay()
// console.log(day)
if(day==1)
{
    console.log("monday")
}
else if(day==2)
    {
        console.log("tuesday")
    }
else if(day==3)
    {

        console.log("wednesday")
    }
else if(day==4)
    {
        console.log("thursday")
    }
else if(day==5)
    {
        console.log("friday")
    }
else if(day==6)
    {
        console.log("saturday")
    }
else
    {
        console.log("sunday")
    }

const date=new Date().getDate()
 console.log(date)
const month=new Date().getMonth()
console.log(month)
const year=new Date().getFullYear()
console.log(year)

console.log(`${date}:${day}:${year}`)


const ctd=new Date().toDateString()
console.log(ctd)

const datee=new Date()
console.log(datee)
