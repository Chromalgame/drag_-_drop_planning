var color = document.getElementsByName("color");

function getColor(color){
    console.log(color.value);
    elements = document.querySelectorAll('.base');
    elements.forEach(element => {
        element.className = `element base ${color.value}`;
    });
}