


const btnTest = document.getElementById("btnTest");
const numbers  = document.getElementsByClassName("number");
const display = document.getElementById("display");

//array

const arr = ["what", "is","this",15,true,"funkiness"];
// arr[0] = "Hi";
//arr[1] = "There";
//arr.push("How");
//arr[10] = "wth";
arr.push("Stuff");

//Even Listener
btnTest.addEventListener('click',  function(){
    display.InnerText = "";

    display.innerText = arr;
    


      
    //arr.forEach(element => display.innerText += element);
   
    //let total =0;
    //let num1 = parseInt(numbers[0].value);
    //let num2 = parseInt(numbers[1].value);
   //foreach

   //for(let i = 0; i < numbers.length; i++){
     //  total += parseInt(numbers[i].value)
  // }

   //(addTwo(num1, num2));

});


//function addTwo(a, b) {
    //return a value

    //return a + b;
    
//}