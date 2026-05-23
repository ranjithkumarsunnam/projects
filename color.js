//Accessing the Elemnts

const pageBody=document.getElementById("pageBody");
const colorName=document.getElementById("colorName");
const colorBtn=document.getElementById("colorBtn");

//creating colors 
let colors =['Red','Yellow','Blue','Purple'];

//Intially color index is 0
let index=0;

//Add Event Listner

colorBtn.addEventListener("click",
    function(){
        pageBody.style.backgroundColor=colors[index];
        colorName.innerText="Background:" +colors[index];
        index++;
        if(index ===colors.length){
            index=0;

        }
});
