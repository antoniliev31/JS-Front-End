function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

    const createElement = (tag, content ='', classes = [], id = '', listener = '') => {
        const element = document.createElement(tag);
        if (content) {
            element.textContent = content;
        }
        if (classes.length) {
            element.classList.add(...classes);
        }
        if (id) {
           element.id = id; 
        }
        if (listener) {
            element.addEventListener('click', listener)
        }
        return element;
    }

    const btnHandler = (e) => {
        const operations = {
            'Add weather': addWeather,
            'Edit weather': editWeather,
            'Load history': loadHistory,
            'Change': changeWeather,
            'Delete': deleteWeather,
        };

        operations[e.target.innerText](e);
    }

    const deleteWeather = (e) => {
        editId = e.target.parentElement.parentElement.id;

        fetch(`${baseUrl}${editId}`, {
            method: 'DELETE'
        }).then((() => {
            loadHistory()
        }))
    }

    const changeWeather = (e) => {
        const mainDiv = e.target.parentElement.parentElement;
        editId = mainDiv.id;

        const location = mainDiv.querySelector('h2').textContetnt;
        const [date, temperature] = mainDiv.querySelectorAll('h3');

        fields.location.value = location;
        fields.date.value = date.textContent;
        fields.temperature.value = temperature.textContent;

        editWeatherButton.disabled = false;
        addWeatherButton.disabled = true;

        mainDiv.remove();
    }

    const addWeather = (e) => {
        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(createNewWeather())
        })
        .then( () => {
            // history
            editWeatherButton.disabled = true;
            addWeatherButton.disabled = false;
            // clear Input Fields
        })
    }
   
    const loadHistory = (e) => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            listContainer.innerHTML = '';

            Object.values(data).forEach(item => {
                const containerDiv = createElement('div', '', ['container'], id=item._id);

                containerDiv.appendChild(createElement('h2', item.location))
                containerDiv.appendChild(createElement('h3', item.date))
                containerDiv.appendChild(createElement('h3', item.temperature, [], 'celsius'))

                const btnContainer = createElement('div', '', ["buttons-container"]);
                btnContainer.appendChild(createElement('button', 'Change', ['change-btn'], '', btnHandler))
                btnContainer.appendChild(createElement('button', 'Delete', ['change-btn'], '', btnHandler))
                containerDiv.appendChild(btnContainer);
                
                listContainer.appendChild(containerDiv);
            })
        })
    }

    const editWeather = (e) =>{
        fetch(`${baseUrl}${editId}`, {
            method: 'PUT',
            body: JSON.stringify(createNewWeather())
        })
        .then( () => {
            // history
            editWeatherButton.disabled = true;
            addWeatherButton.disabled = false;
        })
    }

    // ============================================>

    const createNewWeather = () => {
        const newWeather = {};

    for (const [key, field] of Object.entries(fields)) {
    newWeather[key] = field.value;
    }
        return newWeather;
    }

    let editId = '';
    
    const fields = {
        location: document.getElementById('location'),
        temperature: document.getElementById('temperature'),
        date: document.getElementById('date'),
    };

    const loadBtn = document.getElementById('load-history');
    loadBtn.addEventListener('click', btnHandler);

    const addWeatherButton = document.getElementById('add-weather');
    addWeatherButton.addEventListener('click', btnHandler);

    const editWeatherButton = document.getElementById('edit-weather');
    editWeatherButton.addEventListener('click', btnHandler);

    const listContainer = document.getElementById('list');




}

solve();