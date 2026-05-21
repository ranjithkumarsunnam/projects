//Accessing the Elements 
const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList =document.getElementById("taskList");

//Button click event
addBtn.addEventListener("click",function(){
    const taskText=taskInput.value.trim();

//if the text is empty
    if(taskText===''){
        alert('Please Enter a Task');
        return;

    }

//creating a list items 
    const li=document.createElement('li');
    li.innerHTML=`
    <span>${taskText}</span>
    <button class="deleteBtn">Delete</button>`;

//Adding the list Items to Task
     taskList.appendChild(li);
     taskInput.value="";
     
//Deleting the list items Button
     const deleteBtn=li.querySelector(".deleteBtn");
     deleteBtn.addEventListener("click", function(){
        li.remove();

     });
});