function fixWeightMachine(b) {
const rName = [];

if(Array.isArray(b)){
    for (const c of b) {
        if(c>0) {
         rName.push(c);
        }
     }
     console.log(rName);
}
else{
    console.log("Invalid Input");
    
}
    
}

fixWeightMachine();

function countVowels(b){
if(isNaN(b)){
    let vowels = "aeiouAEIOU";
let totel = 0;

for (const a of b) {

    if(vowels.includes(a)){
        totel=totel+1;

    
}
}
console.log(totel);
}
else{
    console.log("invalid input");
    
}

}

countVowels("sky");



function evaluateResult(d){

if(Array.isArray(d)){
    let result = [];

    for (const a of d) {
    
        
        if(a===null){
            result.push("invalid");
        }
    
        else if(a<50){
            result.push("F");
        }
        else if (isNaN(a)===true){
            result.push("invalid");
        }
        else if(a<=59){
            result.push("D");
        }
        else if(a<=69){
            result.push("C");
        }
        else if(a<=79){
            result.push("B");
        }
        else if(a<=89){
            result.push("A");
        }
        else if(a<=100){
            result.push("A+");
        }
    }
    
    console.log(result); 
}
else{
    console.log("Invalid Input");
    
}
}

evaluateResult(32);



function createPerfectPassword(c){
if(typeof(c)==="string"){
    console.log("Invalid Input");
    
}

else{
    if(c.year.toString().length===4){
   
        let sName = c.name[0].toUpperCase()+c.name.slice(1,c.name.length);
        console.log(sName+c.year);
        
    }
    else{
        console.log("Invalid Input");
        
    }
    
}

}

createPerfectPassword("salman");


function calculateMonthlyExpenses(w,r) {

    if(typeof(w)==="string" || typeof(r)==="string"){
console.log("hobe na");

    }
    else{
        let result = 0;

    for (const s of w) {
        result=result+s;
    }
    if(result-r>0){
        console.log(result-r);
        
    }
    else{
        console.log("pocket empty");
        
    }
    }
}

calculateMonthlyExpenses("taka ni",8000);