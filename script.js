//wrap code inside DOMContent
document.addEventListener("DOMContentLoaded", () =>{

//store elements in constants
const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

//declare decimal and roman numbers
const decimals = [1,4,5,9,10,40,50,90,100,400,500,900,1000]; 
const romans = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];


const decimalToRoman = (num)=>{
  //index of last smaller number than the input
  var tempIndex = 0;
  while(num>0){
    tempIndex = searchBetween(num);
    //tempIndex = searchBetweenImmidiately(num); 
    result.innerText += romans[tempIndex];
    num-=decimals[tempIndex];
  }
};

//searchBetween returns the index of the last smaller number than the input 
const searchBetween = (num) =>{
  let i = 0;
  //if num is bigger than 1000 return M's
  if(num>=1000){
    i = decimals.length-1;
    }
  else{
    while(!(num>=decimals[i] && num<decimals[i+1])){
      i+=1;
    }
  }
  return i;
};

//searchBetween built in function
const searchBetweenImmidiately = (num) =>{
  return decimals.findLastIndex(value => value <= num);
}; 

const checkUserInput = () =>{
  result.innerText="";
  const intNum = parseInt(inputNumber.value);
  //check empty input
  if (inputNumber.value===""){
    result.innerText = "Please enter a valid number";
    }
  //check negatives
  else if(intNum<=0){
    result.innerText = "Please enter a number greater than or equal to 1";
    }
  //check bigger than 4000
    else if(intNum>=4000){
      result.innerText="Please enter a number less than or equal to 3999";
    }
  //convert
    else{
      decimalToRoman(intNum);
      inputNumber.value = "";
    }
}

//use "enter" button instead of clicking
inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

convertBtn.addEventListener("click",checkUserInput);

});
