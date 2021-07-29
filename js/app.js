var bases;
var boxs = document.querySelectorAll('.dropable');
var leave = document.querySelector('.dropable_leave');

const search = document.querySelector('#search_planning');
var choice;
var choice_clone;

maj_bases();
function_boxs();

boxs.forEach((box) =>{
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
});

leave.addEventListener('dragover', dragOver);
leave.addEventListener('dragenter', dragEnter);
leave.addEventListener('dragleave', dragLeave);
leave.addEventListener('drop', dragDrop_leave);

function dragEnd(){
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.classList.remove('hovered');
}

function dragDrop(){
    if(choice.className.includes('droped')){
        this.classList.remove('hovered');
        this.appendChild(choice);
    }else{
        this.classList.remove('hovered');
        this.appendChild(choice_clone);
        choice_clone.className += ' droped';
        choice_clone.classList.remove('base');
    }
    maj_bases();
}

function dragDrop_leave(){
    this.classList.remove('hovered');
    if(!choice.parentNode.parentNode.className.includes('dropable_leave')){
        choice.remove();
    }
}

function function_search() {
    value = search.value.toLowerCase();
    label = document.querySelectorAll("li");
    for (i = 0; i < label.length; i++) {
      content = label[i].textContent || label[i].innerText;
      content = content.toLowerCase();
      if (content.includes(value)) {
        label[i].style.display = "block";
      } else {
        label[i].style.display = "none";
      }
    }
  } 
  
  function maj_bases(){
    bases = document.querySelectorAll('.element');
    bases.forEach((base) =>{
        base.addEventListener('dragstart', () =>{
            choice = base;
            choice_clone = choice.cloneNode(true);
        });
        base.addEventListener('dragend', dragEnd);
    })
  }

  function function_boxs(){
    boxs = document.querySelectorAll('.dropable');
    boxs.forEach((box) =>{
        box.addEventListener('dragover', dragOver);
        box.addEventListener('dragenter', dragEnter);
        box.addEventListener('dragleave', dragLeave);
        box.addEventListener('drop', dragDrop);
    });
}