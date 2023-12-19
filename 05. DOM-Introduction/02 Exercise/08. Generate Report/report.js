function generateReport() {
    let personObject = {};
    let personAllObjects = [];
    let columSetNumbers = [];

    let columsAll = document.querySelectorAll('thead tr th input');

    for (let i = 0; i < columsAll.length; i++) {
        let checboxState = columsAll[i].checked;     
        
        if (checboxState) {
            columSetNumbers.push(i);
        }
    }

    let columnTitles = document.querySelectorAll('thead tr')[0].getElementsByTagName('th');
    let rowCount = document.querySelectorAll('tbody tr').length;

    for (let row = 0; row < rowCount; row++) {

        columSetNumbers.forEach(element => {
            let key = columnTitles[element].textContent.trim().toLowerCase();
            let value = document.querySelectorAll('tbody tr')[row].getElementsByTagName('td')[element].textContent;
            personObject[key] = value;
        });
        personAllObjects.push(Object.assign(personObject));
        personObject = {};
    }

    //personAllObjects.forEach(e => console.log(e));

    document.getElementById('output').innerHTML = JSON.stringify(personAllObjects);

}