//
let fec = {
    name:"juru",
    age : 18 ,
    gender : "female",
    graduate :false
};
console.log(fec.name);
console.log(fec.gender);
console.log(typeof fec.graduate);

//application age
function checkAge (age) {
    if (age < 18){
    console.log("not allowed");
    }
    else{
 console.log("welcame")
    };
}
let aimee= 19 ;
checkAge(aimee);
  
//loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }

let name =["inga","aime","yvet"] ;
function checklength(){
    if(name <= 5)
        console.log("this is short");
    else{
       console.log("this is enaugh");
        }
      
    }
    
checklength()

//set time
function hey(){
    console.log("aimee welcome back")
}
setTimeout(hey,20);