
const addbtnref = document.querySelector('.add');
const lefttxtreft = document.querySelector('.left');
const modelref = document.querySelector('.model');
const taskitemsref = document.querySelector('task-items');


addbtnref.addEventListener('click', function(e){
    togglevisibility();
    e.preventDefault();
})

//function to toggle visibility of the new task fields
function togglevisibility(){
    if(modelref.style.display ==='none'){
        modelref.style.display ='flex';
    }
    else{
        modelref.style.display ='none';
    }
}

lefttxtreft.addEventListener('keyup',function(e){
    if (e.key == "Enter") {
        console.log(e.target.value);
        togglevisibility();
        const taskRef = document.createElement('div');
        taskRef.innerHTML=`
        <div class="taskitem">
        <div class="pcolor"></div>
        <div class="pnumber">${Math.random()}</div>
        <div class="taskdetails">${e.target.value}</div>
        </div>`
        taskitemsref.appendChild(taskRef);
    }
})

  
