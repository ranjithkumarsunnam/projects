//Accessing the elements using ElementId's

const inputText=document.getElementById("inputText");
const Button=document.getElementById("Button");
const Listitems=document.getElementById("ListItems");

//Add eventListner to Button

Button.addEventListener("click",function(){
    const taskText=inputText.value.trim();

    //If the Input is Empty
    if(taskText===''){
        alert("Enter the Task");
        return;
    }

    //creating li Items in ul

    const li=document.createElement('li');
    li.innerHTML=`<span>${taskText}</span>
   <button class=deleteBtn>Delete</button>`;

   //Adding the list Items to ul
   Listitems.appendChild(li);
   inputText.value="";


   //deleting the items from the list
   const deleteBtn=li.querySelector(".deleteBtn");
   deleteBtn.addEventListener("click",function(){
    li.remove();

   });


});