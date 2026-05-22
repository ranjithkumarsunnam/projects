//Selecting the elements in Counter App

const Counter=document.getElementById("counter");

const IncrementBtn=document.getElementById("increment");

const DecrementBtn=document.getElementById("decrement");

const ResetBtn=document.getElementById("reset");


//variable

let number=0;

//increment button
IncrementBtn.addEventListener("click",
    function(){
        number++;
        Counter.innerText=number;

});

//Decremenet Button 
DecrementBtn.addEventListener("click",
    function(){
        number--;
        Counter.innerText=number;

});

//Reset Button click comes to 0

ResetBtn.addEventListener("click",
    function(){
        number=0;
        Counter.innerText=number;

});
