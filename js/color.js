function getColor(this_color){
    elements = document.querySelectorAll('.base');
    elements.forEach(element => {
        element.className = `element base ${this_color.value}`;
    });
}

function getColor_check(this_label){
    const colors = document.querySelectorAll('.radio_color');
    colors.forEach((color_for) =>{
        if(color_for.innerHTML.length > 16){
            console.log("passe");
            color_for.innerHTML = `${color_for.innerHTML.substring(51)}`;
        }
    });

    this_label.innerHTML = `<i class="fas fa-check-circle color_selected"></i> ${this_label.innerHTML}`;
}