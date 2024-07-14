let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (e.target.dataset.value === 'C') {
            display.value = '';
        } else if (e.target.dataset.value === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Erro';
            }
        } else {
            display.value += e.target.dataset.value;
        }
    });
});
 