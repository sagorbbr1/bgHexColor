window.onload = function () {
    main();
}
let div = null;

function main () {
    const input = document.querySelector('.input');
    const container = document.getElementById('root');
    const button = document.querySelector('.button');
    const buttonCopy = document.querySelector('.button-copy');

    button.addEventListener('click', function() {
        const bgColor = createHex();
        container.style.backgroundColor =  bgColor;
        input.value =  bgColor;
    });

    buttonCopy.addEventListener('click', function () {
        navigator.clipboard.writeText(input.value);

        if(div !== null) {
            div.remove();
            div = null;
        }

        toastMessage(`${input.value} Copied`);
      
    })

   
}

function toastMessage(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';
    document.body.appendChild(div);
   
    div.addEventListener('click', function(e) {
        this.classList.remove('toast-message-slide-in');
        this.classList.add('toast-message-slide-out');

        this.addEventListener('animationend', function () {
            this.remove();
            div = null;
        })

    })
    
    
}

function createHex () {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

