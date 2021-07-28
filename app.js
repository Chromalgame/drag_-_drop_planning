const bases = document.querySelectorAll('.element');
const boxs = document.querySelectorAll('.dropable');
const leave = document.querySelector('.dropable_leave');

const search = document.querySelector('.search_planning');
var choice;

bases.forEach((base) =>{
    base.addEventListener('dragstart', () =>{
        choice = base;
    });
    base.addEventListener('dragend', dragEnd);
})

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
    this.classList.remove('hovered');
    choice.parentNode.remove();
    this.appendChild(choice);
    choice.className += ' droped';
}

function dragDrop_leave(){
    this.classList.remove('hovered');    
    var li = document.createElement("li");
    li.appendChild(choice);
    this.appendChild(li);
    choice.classList.remove('droped');
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
  