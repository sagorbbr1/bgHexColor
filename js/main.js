window.onload = function () {
    main();
}

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
        navigator.clipboard.writeText(input.value)
    })

   
}

function createHex () {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

