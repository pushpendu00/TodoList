// code here....

const text = document.getElementById('input-text');
const counter = document.getElementById('count-lisi-items');
const list_items = document.getElementById('list-items');
const add_button= document.getElementById('add-button');

let task_arr=[];

// count list items
function countFun()
{
    // let len=task_arr.length;
    counter.innerHTML=task_arr.length;
}

// Click add button then Call below function (add items)
add_button.addEventListener('click',()=>{
    if(text.value!=='')
    {
        var task={
            id:Date.now().toString(),
            data: text.value,
            check:'false',
        }
        text.value='';
        text.focus();
        storeItems(task);
       
    }
    else
    {
        alert('please enter your Text');
    }
})

// Store Items
function storeItems(tsk){
    if(tsk)
    {
        task_arr.unshift(tsk);
        list_items.innerHTML="";
        printList();
        return;
    }
    alert('please enter list items');
}

// Delete items
function deleteTask(taskId)
{
    // console.log("id=",taskId);
    let temp=[];
    for(let i in task_arr)
    {
        if(task_arr[i].id!=taskId)
        {
            temp.push(task_arr[i]);
        }
    }
    task_arr=temp;
    list_items.innerHTML="";
    printList();
    alert('Delete successfully');
 
    // coding ninjas code
    /*
    const newTask=task_arr.filter(function(task){
        return task.id!==taskId;
    })
    task_arr=newTask;
    showList();
    */ 
}

function checkedListItems(taskId)
{
    // alert("hello");

    // console.log(taskId);
    for(let i in task_arr)
    {
        if(task_arr[i].id==taskId)
        {
            if(task_arr[i].check=='true')
            {
                task_arr[i].check='false';
            }
            else
            {
                task_arr[i].check='true';
            }
        }
    }
    // console.log(task_arr);
}


function printList()
{
    for(let i in task_arr)
    {
        const li=document.createElement("li");
        li.innerHTML= `
                <li class="list">
                    <div class="first-level">
                        <input type="checkbox" id="${task_arr[i].id}" class="ch" onclick="checkedListItems(${task_arr[i].id})">
                    </div>

                    <h4 id="${task_arr[i].id}" class="content">
                        ${task_arr[i].data}
                    </h4>
                    
                    <div class="close-button-div" onclick="deleteTask(${task_arr[i].id})">
                        <img src="close-button.jpg">
                    </div>
                </li>`;

    list_items.appendChild(li); 

    var p1= document.getElementsByClassName("ch");
    // var p2= document.getElementsByClassName("content");
        if(task_arr[i].check=='true'){
            p1[i].checked=true;
        }
        else{
            p1[i].checked=false;
            // console.log(p2[i]);
        }
    }
    countFun();
}