document.addEventListener("DOMContentLoaded",()=>{

    const newTask=document.getElementById("new-task");
    const addTaskbtn=document.getElementById("add-task-button");
    const taskList=document.getElementById("task-list");
    
    function addTask(){
        const taskText=newTask.value.trim();
    
        if(taskText!==""){
        const listItem=document.createElement("li");
        const taskSpan=document.createElement("span");
    
        taskSpan.textContent=taskText;
    
        const editBtn=document.createElement("button");
        editBtn.textContent="Edit";
        editBtn.className="edit-button";
    
        editBtn.addEventListener("click",()=>editTask(listItem,taskSpan));
    
        const dltBtn=document.createElement("button");
        dltBtn.textContent="delete";
        dltBtn.className="dlt-button";
    
        dltBtn.addEventListener("click",()=>dltTask(listItem));
    
        listItem.appendChild(taskSpan);
        taskList.appendChild(listItem);
        listItem.appendChild(editBtn);
        listItem.appendChild(dltBtn);
    
        newTask.value="";
        }
    }
    addTaskbtn.addEventListener("click", addTask);
    
    // -----editTask function-------------
    function editTask(listItem,taskSpan){
        const currentText=taskSpan.textContent;
        const input=document.createElement("input");
        input.type="text";
        input.value=currentText;
    
        listItem.replaceChild(input,taskSpan);
        input.focus();
    
        input.addEventListener("blur",()=>{
            taskSpan.textContent=input.value.trim() || currentText;
            listItem.replaceChild(taskSpan,input);
        });

        input.addEventListener("keypress",(event)=>{
            if(event.key=="Enter"){
            taskSpan.textContent=input.value.trim() || currentText;
            listItem.replaceChild(taskSpan,input);
            }
        });
    }
    
    // -----------------delete function-------
    
    function dltTask(listItem){
        taskList.remove(listItem);
    }
})

