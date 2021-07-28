const menuPerso = document.querySelector('.menu-perso');
const btn1 = document.querySelector('.b1');
const btn2 = document.querySelector('.b2');
const btn3 = document.querySelector('.b3');

const lignes = document.querySelectorAll('tr');

for (let pas = 0; pas < lignes.length; pas++) {
    ligne = lignes[pas];

    ligne.addEventListener('contextmenu', (e) =>{
        e.preventDefault();
    
        menuPerso.style.display = "block";
        menuPerso.style.top = `${e.clientY}px`;
        menuPerso.style.left = `${e.clientX}px`;

        ligne_choisi = lignes[pas];
    })
}

document.addEventListener('click', ()=>{
    menuPerso.style.display = 'none';
})

btn1.addEventListener('click', () =>{
    console.log('Ajouter');
})
btn2.addEventListener('click', () =>{
    console.log('Dupliquer');
})
btn3.addEventListener('click', () =>{
    if(ligne_choisi != lignes[0]){
        ligne_choisi.remove();
    }
})