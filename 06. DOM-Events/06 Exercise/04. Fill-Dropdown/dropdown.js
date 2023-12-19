function addItem() {
    let text = document.getElementById('newItemText');
    let valueText = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');

    let option = document.createElement('option');    

    if (text.value !== '' && valueText.value !== '') {
        option.textContent = text.value;
        option.value = valueText.value;
        menu.appendChild(option);
        text.value = '';
        valueText.value = '';
    }
}
