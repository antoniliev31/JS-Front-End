window.addEventListener("load", solve);

function solve() {
    const expenseTypeInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInpuElement = document.getElementById('date');

    const addButton = document.getElementById('add-btn');
    const previewList = document.getElementById('preview-list');
    const expensesList = document.getElementById('expenses-list');
    const deleteButton = document.querySelector('.btn.delete');

    addButton.addEventListener('click', addExpense);

    function addExpense() {
        const expenseType = expenseTypeInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInpuElement.value;

        if (expenseType && amount && date) {
            const listItem = createExpenseItem(expenseType, amount, date);
            previewList.appendChild(listItem);

            expenseTypeInputElement.value = '';
            amountInputElement.value = '';
            dateInpuElement.value = '';

            addButton.disabled = true;
        }
    }

    function createExpenseItem(expenseType, amount, date) {
        const listItem = document.createElement('li');
        listItem.classList.add('expense-item');

        const article = document.createElement('article');
        const typeParagraph = document.createElement('p');
        typeParagraph.textContent = `Type: ${expenseType}`;
        const amountParagraph = document.createElement('p');
        amountParagraph.textContent = `Amount: ${amount}$`;
        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${date}`;

        article.appendChild(typeParagraph);
        article.appendChild(amountParagraph);
        article.appendChild(dateParagraph);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'edit');
        editButton.textContent = 'edit';
        editButton.addEventListener('click', editExpense);

        const okButton = document.createElement('button');
        okButton.classList.add('btn', 'ok');
        okButton.textContent = 'ok';
        okButton.addEventListener('click', addToExpenses);

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(okButton);

        listItem.appendChild(article);
        listItem.appendChild(buttonsDiv);

        return listItem;
    }

    function editExpense(e) {
        let element = e.target;
        while (element && !element.matches('.expense-item')) {
            element = element.parentElement;
        }
    
        const listItem = element;
        if (!listItem) {
            return;
        }
    
        const [type, amount, date] = Array.from(listItem.querySelectorAll('p')).map(p => p.textContent.split(': ')[1]);
    
        expenseTypeInputElement.value = type;
        amountInputElement.value = amount.slice(0, -1);
        dateInpuElement.value = date;
    
        listItem.remove();
        addButton.disabled = false;
    }

    function addToExpenses(event) {
        const listItem = event.target.closest('.expense-item');
        Array.from(listItem.querySelectorAll('.buttons')).forEach(buttonsDiv => buttonsDiv.remove());
        expensesList.appendChild(listItem);
        addButton.disabled = false;
    }

    deleteButton.addEventListener('click', function () {
        location.reload();
    });
}
