const menuPerso = document.querySelector('.menu-perso');
const btn1 = document.querySelector('.b1');
const btn2 = document.querySelector('.b2');
const btn3 = document.querySelector('.b3');
const close = document.querySelector('.add_ligne_planning_fermer');
const add_ligne_planning = document.querySelector('.add_ligne_planning');
const add_ligne_btns = document.querySelectorAll('.add_ligne_btn');

var lignes;

refresh();

document.addEventListener('click', (e)=>{
    menuPerso.style.display = 'none';
})

btn1.addEventListener('click', () =>{
    add_ligne_planning.style.display = "flex";
})
btn2.addEventListener('click', () =>{
    console.log('Dupliquer');
})
btn3.addEventListener('click', () =>{
    if(ligne_choisi != lignes[0]){
        ligne_choisi.remove();
    }
})
close.addEventListener('click', () =>{
    add_ligne_planning.style.display = "none";
})

add_ligne_btns.forEach((add_ligne_btn) =>{
    add_ligne_btn.addEventListener('click', () =>{
        const tr = document.createElement('tr');
        const table = document.querySelector('tbody');
        tr.innerHTML = `<td>${add_ligne_btn.innerText}</td>
        <td class="dropable"></td>
        <td class="dropable"></td>
        <td class="dropable"></td>
        <td class="dropable"></td>
        <td class="dropable"></td>
        <td class="dropable"></td>
        <td class="dropable"></td>`;
        add_ligne_planning.style.display = "none";
        table.appendChild(tr);
        refresh();
    })
})

function function_search_add(){
    value = search.value.toLowerCase();
    label = document.querySelectorAll(".add_ligne_btn");
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

function refresh(){
    lignes = document.querySelectorAll('tr');
    lignes.forEach((ligne) =>{

        ligne.addEventListener('contextmenu', (e) =>{
            e.preventDefault();
        
            menuPerso.style.display = "block";
            menuPerso.style.top = `${e.clientY}px`;
            menuPerso.style.left = `${e.clientX}px`;
    
            ligne_choisi = ligne;
        })
    })
}