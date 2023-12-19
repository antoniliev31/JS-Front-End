window.addEventListener("load", solve);

function solve() {
  const previewListElement = document.getElementById("preview-list");
  const stdentNameInputElement = document.getElementById("student");
  const universityInputElement = document.getElementById("university");
  const scoreInputElement = document.getElementById("score");
  const nextButtonElement = document.getElementById("next-btn");
  const candidateListElement = document.getElementById('candidates-list');

  nextButtonElement.addEventListener("click", (e) => {
    e.preventDefault();

    if(!stdentNameInputElement.value || !universityInputElement.value || !scoreInputElement.value) {
      return;
    }

    const liElement = document.createElement("li");
    liElement.className = "application";

    const articleElement = document.createElement("article");

    const articleHaederElement = document.createElement("h4");
    articleHaederElement.textContent = stdentNameInputElement.value;

    const universityParagraphElement = document.createElement("p");
    universityParagraphElement.textContent = `University: ${universityInputElement.value}`;

    const scoreParagraphElement = document.createElement("p");
    scoreParagraphElement.textContent = `Score: ${scoreInputElement.value}`;

    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add('action-btn')
    editButtonElement.classList.add('edit')
    editButtonElement.textContent = "edit";

    const applyButtonElement = document.createElement("button");
    applyButtonElement.classList.add('action-btn')
    applyButtonElement.classList.add('apply')
    applyButtonElement.textContent = "apply";

    // Започва се от вътре навън
    articleElement.appendChild(articleHaederElement);
    articleElement.appendChild(universityParagraphElement);
    articleElement.appendChild(scoreParagraphElement);
    // Добавяме към li елемента + двата бутона
    liElement.appendChild(articleElement);
    liElement.appendChild(editButtonElement);
    liElement.appendChild(applyButtonElement);

    
    // Тук закрепяме за DOM дървото
    previewListElement.appendChild(liElement);

    clearForm();

    nextButtonElement.setAttribute('disabled', true)

    // Step 2    
    editButtonElement.addEventListener('click', (e) => {      
      // Move values from form 
      stdentNameInputElement.value = articleHaederElement.textContent;
      universityInputElement. value = universityParagraphElement.textContent.split(': ')[1];
      scoreInputElement.value = Number(scoreParagraphElement.textContent.split(': ')[1]);

      articleHaederElement.textContent = '';
      universityParagraphElement.textContent = '';
      scoreParagraphElement.textContent = '';
      // Remove from preview form 
      liElement.remove();
      
      // Enable button
      nextButtonElement.removeAttribute('disabled')      
    });

    // Step 3
    applyButtonElement.addEventListener('click', () => {
      
      editButtonElement.remove();
      applyButtonElement.remove();      
      
      candidateListElement.appendChild(liElement);
      
      // Вместо Remove
      previewListElement.innerHTML = '';

      nextButtonElement.removeAttribute('disabled')
    });

    


  });

  function clearForm() {
    (stdentNameInputElement.value = ""),
      (universityInputElement.value = ""),
      (scoreInputElement.value = "");
  }

  
}
