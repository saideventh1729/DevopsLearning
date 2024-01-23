
const addbtnref = document.querySelector('.add');
const lefttxtreft = document.querySelector('.left');
const modelref = document.querySelector('.model');
const rightrefs = document.querySelectorAll('.priority');
const taskitemsref = document.querySelector('.taskitems');
const textarearef = document.querySelector('#tdetail');

addbtnref.addEventListener('click', function(e){
    togglevisibility();
    e.preventDefault();
})

console.log(rightrefs);

for(i=0; i<rightrefs.length;i++){
    var pref = rightrefs[i];
    pref.addEventListener('click', function(e){ 
        console.log("priority button clicked" + e.target);
        removeselector();
        e.target.classList.add('selector');
        console.log('selector added'+" " +e.target.classList)

    })
}

function removeselector(){
    for(i=0; i<rightrefs.length;i++){
        var pref = rightrefs[i];
        pref.classList.remove('selector');
    }
}


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
        //here find the color that is selected, we can use doc.query selector to get that
        const selectorref = document.querySelector('.selector');
        taskRef.innerHTML=`
        <div class="taskitem">
        <div class="pcolor" id='${selectorref.id}'></div>
        <div class="pnumber">${Math.random()*Math.pow(10,16)}</div>
        <div class="task-delete-icon">Remove</div>
        <div class="taskdetails">${e.target.value}</div>
        </div>
        `
        e.target.value='';
        taskitemsref.appendChild(taskRef);
        //add click event listener on the remove icon, to remove the detail
        const deleteref =  taskRef.querySelector('.task-delete-icon');
        deleteref.addEventListener('click',function(e){
           let eletoberemoved = e.target.closest('.taskitem');
           eletoberemoved.remove();
        })
    }
})

  
