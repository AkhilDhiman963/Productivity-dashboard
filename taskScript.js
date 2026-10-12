let themeToggle = document.querySelector("#theme-toggle");
let sun = document.querySelector("#sun");
let moon = document.querySelector("#moon");
let body = document.querySelector("body");
let taskList = document.querySelector("#task-list");
let taskCard = document.querySelector(".task-card");

let addTaskBtn = document.querySelector("#add-task-btn");
let taskInput = document.querySelector("#task-input");
let searchInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-btn");
let addRow = document.querySelector(".add-row");
let emptyState = document.querySelector(".empty-state");
let app = document.querySelector(".app");

let clearTask = document.querySelector(".clear-task");

let allTaskBtn = document.querySelector(".all-task-btn");
// let completeTaskBtn = document.querySelector(".complete-task-btn");
// let pendingTaskBtn = document.querySelector(".pending-task-btn");

let homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click",() => {
    history.back();
  })

allTaskBtn.addEventListener("click", () => {
  ui();
  completeUi()
});


// completeTaskBtn.addEventListener("click", () => {
//   taskList.innerHTML = "";
  
//     taskArr.forEach((e, index) => {
//     if (e.completedId!=true) 
//       return
    
//     taskList.innerHTML += `<div class="task-card " data-id="${index + 1} data-complete="${e.completedId}">
//     <span class="line-no">${index + 1}</span>
//     <button class="complete-btn " onclick="complete(this,${index})" title="Mark complete">&#10003;</button>
//     <span class="task-text">${e.taskName}</span>
//     <div class="task-actions">
//     <button class="edit-btn" onclick="upd(${index})" title="Edit">&#9998;</button>
//     <button class="delete-btn" onclick="del(${index})" title="Delete">&#10005;</button>
//     </div>
//     </div>`;
//   });
//   completeUi()
// });

// pendingTaskBtn.addEventListener("click", () => {
//   taskList.innerHTML = "";

//   taskArr.forEach((e, index) => {
//     if (e.completedId!=false) 
//       return
    
//     taskList.innerHTML += `<div class="task-card " data-id="${index + 1} data-complete="${e.completedId}">
//         <span class="line-no">${index + 1}</span>
//         <button class="complete-btn " onclick="complete(this,${index})" title="Mark complete">&#10003;</button>
//         <span class="task-text">${e.taskName}</span>
//         <div class="task-actions">
//           <button class="edit-btn" onclick="upd(${index})" title="Edit">&#9998;</button>
//           <button class="delete-btn" onclick="del(${index})" title="Delete">&#10005;</button>
//         </div>
//       </div>`;
//   });
//   completeUi()
// });


let complete = (btn, index) => {
  const card = btn.closest(".task-card");
  const taskText = card.querySelector(".task-text");

  if (taskArr[index].completedId==true) {
      btn.classList.remove("completed");
    taskText.style.textDecoration = "none";
    taskText.style.color = "black";
    taskArr[index].completedId = false;
    localStorage.setItem("taskArray", JSON.stringify(taskArr));
  }
  else{
    btn.classList.add("completed");
    taskArr[index].completedId = true;
    localStorage.setItem("taskArray", JSON.stringify(taskArr));
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "gray";
  
  }
};



clearTask.addEventListener("click", () => {
  taskArr = [];
  localStorage.setItem("taskArray", JSON.stringify(taskArr));
  ui();
});

let taskArr =
  JSON.parse(localStorage.getItem("taskArray")) != null || undefined
    ? JSON.parse(localStorage.getItem("taskArray"))
    : [];


let flag =
  JSON.parse(localStorage.getItem("flag")) != null
    ? JSON.parse(localStorage.getItem("flag"))
    : true;

themeUi();

function themeUi() {
  if (!flag) {
    moon.style.display = "none";
    sun.style.display = "block";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    themeToggle.style.backgroundColor = "gray";
    taskInput.style.color = "#efe8d8cb";
    searchInput.style.color = "#efe8d8cb";
    app.classList.add("on");
  } else {
    app.classList.remove("on");
    taskInput.style.color = "black";
    searchInput.style.color = "black";
    moon.style.display = "block";
    sun.style.display = "none";
    body.style.backgroundColor = "#efe8d8";
    themeToggle.style.backgroundColor = "#efe8d8";
    body.style.color = "black";
  }
}

themeToggle.addEventListener("click", () => {
  flag = !flag;
  localStorage.setItem("flag", JSON.stringify(flag));
  themeUi();
});

 
let ui = () => {
  if (taskArr == "") {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }

  taskList.innerHTML = "";
  taskArr.forEach((e, index) => {
    taskList.innerHTML += `<div class="task-card " data-id="${index + 1} data-complete="${e.completedId}">
        <span class="line-no">${index + 1}</span>
        <button class="complete-btn " onclick="complete(this,${index})" title="Mark complete">&#10003;</button>
        <span class="task-text">${e.taskName}</span>
        <div class="task-actions">
          <button class="edit-btn" onclick="upd(${index})" title="Edit">&#9998;</button>
          <button class="delete-btn" onclick="del(${index})" title="Delete">&#10005;</button>
        </div>
      </div>`;
  });

};

ui();

 function completeUi() {
  //  let btn = document.querySelector(".complete-btn ")
  //     const taskText = document.querySelector(".task-text");

  //     taskArr.map((e)=>e.completedId).forEach((e,index)=>{

  // if (taskArr[index].completedId==true) {
  //     btn.classList.add("completed");
  //     taskText.style.textDecoration = "line-through";
  //     taskText.style.color = "gray";
  //   }
  //   else{
  //     btn.classList.remove("completed");
  //     taskText.style.textDecoration = "none";
  //     taskText.style.color = "black";
  
  // }
  // })

  let allCards = document.querySelectorAll(".task-card");

  taskArr.map((e) => e.completedId).forEach((isDone, index) => {
    let card = allCards[index];
    if (!card) return; // safety check in case of mismatched lengths

    let btn = card.querySelector(".complete-btn");
    let taskText = card.querySelector(".task-text");

    if (isDone) {
      btn.classList.add("completed");
      taskText.style.textDecoration = "line-through";
      taskText.style.color = "gray";
    } else {
      btn.classList.remove("completed");
      taskText.style.textDecoration = "none";
      taskText.style.color = "black";
    }
  });
}

completeUi()


let completedId ;
 if (JSON.parse(localStorage.getItem(completedId))==null || undefined) {
  completedId = false
}
else{
  JSON.parse(localStorage.getItem(completedId))
}





let del = (index) => {
  taskArr.splice(index, 1);
  localStorage.setItem("taskArray", JSON.stringify(taskArr));
  ui();
};

let updatedIndex = null;

let upd = (index) => {
  taskInput.value = taskArr[index].taskName;
  taskInput.focus();
  updatedIndex = index;
};

addTaskBtn.addEventListener("click", (e) => {
  let inputValue = taskInput.value.trim();

  if (inputValue === "") {
    return alert("Enter the task first");
  }

  let obj = {
    taskName: inputValue,
    completedId: completedId,
  };

  let a = taskArr.find((e) => {
    return e.taskName == inputValue;
  });

  if (updatedIndex != null) {
    taskArr[updatedIndex] = obj = {
      taskName: inputValue,
    };
    localStorage.setItem("taskArray", JSON.stringify(taskArr));
    updatedIndex = null;
    return ui();
  }

  if (a) {
    alert("Task already exits");
    return taskInput.focus();
  } else {
    taskArr.push(obj);
    localStorage.setItem("taskArray", JSON.stringify(taskArr));
  }

  taskInput.value = "";
  ui();
  completeUi()
});

searchBtn.addEventListener("click", () => {
  let searchValue = searchInput.value.trim();

  if (searchValue==="") {
    return alert("Please enter the task you want to search")
  }

  const index = taskArr.findIndex((e)=>e.taskName.toUpperCase()===searchValue.toUpperCase())

  if (index=== -1) {
    alert("No such task")
  }
  else{
    const e = taskArr[index]
    taskList.innerHTML = "";
    taskList.innerHTML += `<div class="task-card " data-id="${index + 1} data-complete="${e.completedId}">
        <span class="line-no">${index + 1}</span>
        <button class="complete-btn " onclick="complete(this,${index})" title="Mark complete">&#10003;</button>
        <span class="task-text">${e.taskName}</span>
        <div class="task-actions">
          <button class="edit-btn" onclick="upd(${index})" title="Edit">&#9998;</button>
          <button class="delete-btn" onclick="del(${index})" title="Delete">&#10005;</button>
        </div>
      </div>`;
  }

  completeUi()
  searchInput.value=""
});
