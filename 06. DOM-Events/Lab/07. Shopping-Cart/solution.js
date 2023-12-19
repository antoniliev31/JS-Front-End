function solve() {
   const addButton = Array.from(document.querySelectorAll('button.add-product'));
   const checkoutBtn = document.querySelector('button.checkout');
   const textArea = document.querySelector('textarea');
   let boughtProduct = [];
   let totalPrice = 0;


   addButton.forEach(btn => {
      btn.addEventListener('click', addElementInTheCard);
   })

   function addElementInTheCard(e) {
      const currProduct = e.currentTarget.parentNode.parentNode;
      const productTitle = currProduct.querySelector('.product-title').textContent;
      const productPrice = currProduct.querySelector('.product-line-price').textContent;
      
      if(!boughtProduct.includes(productTitle)) {
         boughtProduct.push(productTitle);
      }

      textArea.value += `Added ${productTitle} for ${productPrice} to the cart.\n`;
      totalPrice += Number(productPrice);
   }

   checkoutBtn.addEventListener('click', checkout);

   function checkout(e) {
      textArea.value += `You bought ${boughtProduct.join(', ')} for ${totalPrice.toFixed(2)}.`;
      addButton.forEach(btn => {
         btn.removeEventListener('click', addElementInTheCard);
      })
   }


}