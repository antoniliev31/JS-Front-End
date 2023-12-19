const baseUrl = "http://localhost:3030/jsonstore/tasks/";

const loadVacantionButton = document.getElementById("load-vacations");
const vacationList = document.getElementById("list");
const formElement = document.querySelector("#form form");

const nameInput = document.getElementById("name");
const daysInput = document.getElementById("num-days");
const dateInput = document.getElementById("from-date");
const addButtonElement = document.getElementById("add-vacation");
const editButtonElement = document.getElementById("edit-vacation");

loadVacantionButton.addEventListener("click", loadVacantions);

addButtonElement.addEventListener("click", (e) => {
  e.preventDefault();
  // Get data from Inputs
  const newVacantion = {
    name: nameInput.value,
    days: daysInput.value,
    date: dateInput.value,
  };
  // Send POST request from server
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newVacantion),
  })
    // + GET vacantions
    .then(loadVacantions());
  // Clear inputs
  clearForm();
});

editButtonElement.addEventListener("click", (e) => {
  e.preventDefault();

  const vacantionId = formElement.dataset.vacantion;
  // Get data
  const vacantionData = {
    _id: vacantionId,
    name: nameInput.value,
    days: daysInput.value,
    date: dateInput.value,
  };
  //PUT Request
  fetch(`${baseUrl}/${vacantionId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vacantionData),
  })
    //GET Vacantion
    .then(loadVacantions)
    .then(() => {
      //Deactivate EDIT Button
      addButtonElement.removeAttribute("disabled");
      //Activate ADD Button
      editButtonElement.setAttribute("disabled", "disabled");
      //ClearForm
      clearForm();
      //Remove Dataset
      delete formElement.dataset.vacantion;
    });
});

// Functions
function clearForm() {
  nameInput.value = "";
  daysInput.value = "";
  dateInput.value = "";
}

function loadVacantions() {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((result) => {
      renderVacantions(Object.values(result));
    });
}

function renderVacantions(vacantions) {
  vacationList.innerHTML = "";

  vacantions
    .map(renderMeals)
    .forEach((vacantionElement) => vacationList.appendChild(vacantionElement));
}

function renderMeals(vacantion) {
  const container = document.createElement("div");
  container.className = "container";

  const h2NameElement = document.createElement("h2");
  h2NameElement.textContent = vacantion.name;

  const h3DateElement = document.createElement("h3");
  h3DateElement.textContent = vacantion.date;

  const h3DaysElement = document.createElement("h3");
  h3DaysElement.textContent = vacantion.days;

  const changeButton = document.createElement("button");
  changeButton.className = "change-btn";
  changeButton.textContent = "Change";
  // addEventListener From Change Button
  changeButton.addEventListener("click", () => {
    //add to form fields
    nameInput.value = vacantion.name;
    daysInput.value = vacantion.days;
    dateInput.value = vacantion.date;
    //remove from confirmed List
    container.remove();
    //Activate EDIT vacantion Button
    editButtonElement.removeAttribute("disabled");
    //Deactivate ADD vacantion Button
    addButtonElement.setAttribute("disabled", "disabled");

    //Save vacantion Id! Neeed for EDIT!
    formElement.dataset.vacantion = vacantion._id;
  });

  const doneButton = document.createElement("button");
  doneButton.className = "done-btn";
  doneButton.textContent = "Done";
  // addEventListener From Done Button
  doneButton.addEventListener("click", () => {
    //Sednd Delete Request
    fetch(`${baseUrl}/${vacantion._id}`, {
      method: "DELETE",
    })
      //Load Vacantion
      .then(loadVacantions);
  });

  container.appendChild(h2NameElement);
  container.appendChild(h3DateElement);
  container.appendChild(h3DaysElement);
  container.appendChild(changeButton);
  container.appendChild(doneButton);

  return container;
}
