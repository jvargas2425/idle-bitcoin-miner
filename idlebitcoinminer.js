

/* these variables are for monitoring the quantity of equipment and total balance of bitcoin the player has */

var balance = 0;
var compQty = 1;
var gpuQty = 0;
var asicQty = 0;
var farmQty = 0;

/* the below functions are launched when the button to buy an equipment is clicked. */

function compFunction(){

  if(balance > .01){
  balance = balance - .01;
  compQty = compQty + 1;
  document.getElementById("cqty").innerHTML = "QTY: " + compQty;}

  else{
    alert("You do not have enough Bitcoin!");
};
};

function gpuFunction(){
  if(balance > .1){
    balance = balance - .1;
    gpuQty = gpuQty + 1;
  document.getElementById("gqty").innerHTML = "QTY: " + gpuQty;}

  else{
    alert("You do not have enough Bitcoin!");
  };
};

function asicFunction(){
  if(balance > 1){
    balance = balance - 1;
    asicQty = asicQty + 1;
    document.getElementById("aqty").innerHTML = "QTY: " + asicQty;}

    else{
      alert("You do not have enough Bitcoin!");
    };
};

function farmFunction(){
  if(balance > 5){
    balance = balance - 5;
    farmQty = farmQty + 1;
    document.getElementById("fqty").innerHTML = "QTY: " + farmQty;}

    else{
      alert("You do not have enough Bitcoin!");
    };
};

//The intervals below will trigger the incremental functions

setInterval(compOutput, 1000);
setInterval(gpuOutput, 1000);
setInterval(asicOutput, 1000);
setInterval(farmOutput, 1000);
setInterval(balanceUpdate, 1000);

//the function below will increment the balance

function compOutput(){
  balance = balance + (.0001 * compQty);
}

  function gpuOutput(){
    balance = balance + (.001 * gpuQty);
  }

  function asicOutput(){
    balance = balance + (.01 * asicQty);
  }

  function farmOutput(){
    balance = balance + (1 * farmQty);
  }

//the function below will update the standing balance

function balanceUpdate(){
  document.getElementById("bitcoinBalance").innerHTML = "Bitcoin Balance: " + balance;}
