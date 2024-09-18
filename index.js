const btn = document.getElementById("enter");
const inp = document.getElementById("input");

const tasks = [];

// 
const taskContainer = document.getElementById("task-cont");

function addTask(task) {
    console.log(task)

    const cont = document.createElement("div");
    cont.classList.add("task-item")

    const li = document.createElement("li");
    li.textContent = task;

    const check = document.createElement("input")
    check.setAttribute("type", "checkbox")





    const delBtn = document.createElement("button")
    delBtn.textContent = "delete";
    delBtn.classList.add("delete-task")

    delBtn.addEventListener("click", function() {

    })




    cont.appendChild(check)
    cont.appendChild(li)
    cont.appendChild(delBtn)


    taskContainer.appendChild(cont);



}


btn.addEventListener("click", function() {

    const inpVal = inp.value;
    inp.value = "";
    addTask(inpVal);
    // console.log(inpVal)
    tasks.push(inpVal);
    // addTask(inpVal);
    // console.log(tasks);
})

localStorage.setItem("tasks", tasks);



// function addTask(text){
//     const taskContainer  =  document.getElementById("task-cont");
//     const taskEleCont = document.createElement("div");
//       taskEleCont.classList.add(".task-item");

//     const li = document.createElement("li");
//     // li.textContent = text ;

//     const check = document.createElement("checkbox");

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "delete";

//     taskEleCont.appendChild(check);
//     taskEleCont.appendChild(li);
//     taskEleCont.appendChild(deleteBtn);

// }
