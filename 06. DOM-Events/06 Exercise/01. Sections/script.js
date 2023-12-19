function create(words) {
   let mainDiv = document.getElementById('content');

   for (const word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');

      paragraph.textContent = word;
      paragraph.style.display = 'none';

      mainDiv.appendChild(div);
      div.appendChild(paragraph);

      div.addEventListener('click', () => {
         paragraph.style.display = '';
      })

   }
}