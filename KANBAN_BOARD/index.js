const todo=document.querySelector('#todo');
const progress=document.querySelector('#progress')
const done=document.querySelector('#done')
const tasks=document.querySelectorAll('.task');
const addtaskbtn=document.querySelector('#add-new-task')
const columns=[todo,progress,done];
let draggedelement=null;
let taskdata={};


// load data from localStorage
if(localStorage.getItem("tasks")){
    const data=JSON.parse(localStorage.getItem("tasks"));

    for(const col in data){
        const column=document.querySelector(`#${col}`);

        // remove old hardcoded tasks
        const oldtasks=column.querySelectorAll(".task");
        oldtasks.forEach(task=>{
            task.remove();
        });

        data[col].forEach(task=>{
            const div=document.createElement("div");

            div.classList.add("task");
            div.setAttribute("draggable","true");

            div.innerHTML=` 
                <h2>${task.title}</h2>
                <p>${task.desc}</p>
                <button class="delete">Delete</button>
            `;

            column.appendChild(div);

            div.addEventListener("drag",(e)=>{
                draggedelement=div;
            })

        })

        const tasks=column.querySelectorAll(".task");
        const count=column.querySelector(".right");
        count.innerText=tasks.length;
    }
}


// existing tasks
tasks.forEach(task=>{
    task.addEventListener("drag",(e)=>{
        // console.log("dragging",e);
        draggedelement=task;
    })
})


function addDragevent(column){

    column.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        column.classList.add("hover-over");
    })


    column.addEventListener("dragleave",(e)=>{
        e.preventDefault();
        column.classList.remove("hover-over"); 
    })


    column.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })


    column.addEventListener("drop",(e)=>{
        e.preventDefault();

        column.appendChild(draggedelement);
        column.classList.remove("hover-over");


        columns.forEach(col=>{
            const tasks=col.querySelectorAll(".task");
            const count=col.querySelector(".right");
      
            taskdata[col.id]=[...tasks].map(t=>{
                return{
                    title:t.querySelector("h2").innerText,
                    desc:t.querySelector("p").innerText
                }
            });

            count.innerText=tasks.length;
        })

        localStorage.setItem("tasks",JSON.stringify(taskdata));
        
    })

}


addDragevent(todo);
addDragevent(progress);
addDragevent(done);


// modal related logic

const togglemodalbtn=document.querySelector("#toggle-modal");
const modal=document.querySelector(".modal");
const modalbg=document.querySelector(".modal .bg");


togglemodalbtn.addEventListener("click",()=>{
    modal.classList.toggle("active");
})


modalbg.addEventListener("click", () => {
    modal.classList.remove("active");
});


addtaskbtn.addEventListener("click",()=>{
    const task_title=document.querySelector('#tasktitle').value;
    const task_descriptiom=document.querySelector('#taskdescription').value;


    const div=document.createElement('div');

    div.classList.add("task");
    div.setAttribute("draggable","true");

    div.innerHTML=` 
        <h2>${task_title}</h2>
        <p>${task_descriptiom}</p>
        <button class="delete">Delete</button>
    `

    todo.appendChild(div);


    div.addEventListener("drag",(e)=>{
        draggedelement=div;
    })

    document.querySelector('#tasktitle').value = "";
document.querySelector('#taskdescription').value = "";

modal.classList.remove("active");


    // save newly added task
    columns.forEach(col=>{
        const tasks=col.querySelectorAll(".task");
        const count=col.querySelector(".right");

        taskdata[col.id]=[...tasks].map(t=>{
            return{
                title:t.querySelector("h2").innerText,
                desc:t.querySelector("p").innerText
            }
        });

        count.innerText=tasks.length;
    })

    localStorage.setItem("tasks",JSON.stringify(taskdata));


    modal.classList.remove("active");   
})


// delete task
document.querySelector('.board').addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.closest('.task').remove();


        // save after deleting
        columns.forEach(col=>{
            const tasks=col.querySelectorAll(".task");
            const count=col.querySelector(".right");

            taskdata[col.id]=[...tasks].map(t=>{
                return{
                    title:t.querySelector("h2").innerText,
                    desc:t.querySelector("p").innerText
                }
            });

            count.innerText=tasks.length;
        })

        localStorage.setItem("tasks",JSON.stringify(taskdata));
    }
});
