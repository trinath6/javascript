var person=prompt("enter male or female")
var age=+prompt("enter age")

switch (person){
    case "male":
        if(person=="male"){
            if(age>21){
                console.log("eligible");

            }
            else{
                console.log("huhuhuhuhuh");
            }
        }
    break;

    case "female":
        
        if(person=="female"){
            if(age>18){
                console.log("eligible");

            }
            else{
                console.log("huhuhuhuhuh");
            }
        }
    break;
        
}
