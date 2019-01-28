const btn = document.querySelector('button');
let counter = "";
let number = 5;

function addElement() {
    counter++;
    const div = document.createElement('div');
    div.textContent = counter;
    document.body.appendChild(div); 

    if(counter % number == 0) {
        div.classList.add('circle')
    }
    
}

btn.addEventListener('click', addElement);