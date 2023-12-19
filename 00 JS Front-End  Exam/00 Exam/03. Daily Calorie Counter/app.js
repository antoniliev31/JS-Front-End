window.addEventListener("load", solve);

function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/tasks';

    const loadMealsButton = document.getElementById("load-meals");
    const addMealButton = document.getElementById("add-meal");
    const editMealButton = document.getElementById("edit-meal");
    const foodInput = document.getElementById("food");
    const timeInput = document.getElementById("time");
    const caloriesInput = document.getElementById("calories");

    const listContainer = document.getElementById("list");

    loadMealsButton.addEventListener("click", loadMeals);
    addMealButton.addEventListener("click", addMeal);
    editMealButton.addEventListener("click", editMeal);

    async function loadMeals() {
        const response = await fetch(baseUrl);
        const data = await response.json();
    
        listContainer.innerHTML = "";
        Object.entries(data).forEach(([id, meal]) => {
            const mealDiv = createMealDiv(meal, id);
            listContainer.appendChild(mealDiv);
        });
    
        const selectedMealDiv = document.querySelector(".meal.selected");
        if (selectedMealDiv) {
            selectMeal(selectedMealDiv);
        } else {
            disableEditButton();
        }
    }
    

    async function addMeal() {
        const food = foodInput.value;
        const time = timeInput.value;
        const calories = caloriesInput.value;

        if (food && time && calories) {
           
                fetch(baseUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ food, time, calories }),
                });

                loadMeals();
                clearInputFields();            
        }
    }

    async function editMeal() {
        const selectedMealId = document.querySelector(".meal.selected").dataset.id;
        
        const food = foodInput.value;
        const time = timeInput.value;
        const calories = caloriesInput.value;

        if (selectedMealId && food && time && calories) {
            
                await fetch(`${baseUrl}/${selectedMealId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ food, time, calories }),
                });

                await loadMeals();
                clearInputFields();               
            
        }
    }

    async function deleteMeal(mealId) {
        
            fetch(`${baseUrl}/${mealId}`, {
                method: "DELETE",
            });

            await loadMeals();
            clearInputFields();
        
    }

    function createMealDiv(meal, id) {
        const mealDiv = document.createElement("div");
        mealDiv.classList.add("meal");
        mealDiv.dataset.id = id;

        const foodParagraph = document.createElement("h2");
        foodParagraph.textContent = meal.food;

        const timeParagraph = document.createElement("h3");
        timeParagraph.textContent = meal.time;

        const caloriesParagraph = document.createElement("h3");
        caloriesParagraph.textContent = meal.calories;

        const buttonsDiv = document.createElement("div");
        buttonsDiv.id = "meal-buttons";

        const changeButton = document.createElement("button");
        changeButton.classList.add("change-meal");
        changeButton.textContent = "Change";
        changeButton.addEventListener("click", () => populateForm(meal, id));

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-meal");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteMeal(id));

        buttonsDiv.appendChild(changeButton);
        buttonsDiv.appendChild(deleteButton);

        mealDiv.appendChild(foodParagraph);
        mealDiv.appendChild(timeParagraph);
        mealDiv.appendChild(caloriesParagraph);
        mealDiv.appendChild(buttonsDiv);

        mealDiv.addEventListener("click", () => selectMeal(mealDiv));

        return mealDiv;
    }

    function selectMeal(mealDiv) {
        const selectedMeal = document.querySelector(".meal.selected");
        if (selectedMeal) {
            selectedMeal.classList.remove("selected");
        }

        mealDiv.classList.add("selected");

        const meal = mealDiv.querySelector("h2").textContent;
        const time = mealDiv.querySelector("h3:nth-child(2)").textContent;
        const calories = mealDiv.querySelector("h3:nth-child(3)").textContent;

        foodInput.value = meal;
        timeInput.value = time;
        caloriesInput.value = calories;

        enableEditButton();
    }

    function populateForm(meal, id) {
        foodInput.value = meal.food;
        timeInput.value = meal.time;
        caloriesInput.value = meal.calories;

        enableEditButton();
        disableAddButton();
    }

    function disableEditButton() {
        editMealButton.disabled = true;
        addMealButton.disabled = false;
    }

    function enableEditButton() {
        editMealButton.disabled = false;
        addMealButton.disabled = true;
    }

    function disableAddButton() {
        addMealButton.disabled = true;
        editMealButton.disabled = false;
    }

    function clearInputFields() {
        foodInput.value = "";
        timeInput.value = "";
        caloriesInput.value = "";
    }
}
