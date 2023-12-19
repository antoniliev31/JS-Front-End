function encodeAndDecodeMessages() {
    let encodePlaceholder = document.getElementsByTagName('textarea')[0];
    let encodeButton = document.getElementsByTagName('button')[0];

    let decodePlaceholder = document.getElementsByTagName('textarea')[1];
    let decodeButton = document.getElementsByTagName('button')[1];

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode)
    function encode() {
        let inputWords = encodePlaceholder.value.split(' '); 
        newWordAray = [];
        for (const word of inputWords) {            
            let newWord = '';

            for (let i = 0; i < word.length; i++) {
                let ascii = word.charCodeAt(i) + 1;
                newWord += String.fromCharCode(ascii)                                   
            }
            newWordAray.push(newWord);
        }        
        decodePlaceholder.textContent = newWordAray.join('!');
        encodePlaceholder.value = '';
    }      

    function decode() {
        let inputWords = decodePlaceholder.value.split('!');
        newWordAray = [];
        for (const word of inputWords) {            
            let newWord = '';

            for (let i = 0; i < word.length; i++) {
                let ascii = word.charCodeAt(i) - 1;
                newWord += String.fromCharCode(ascii)                                   
            }
            newWordAray.push(newWord);
        }        
        decodePlaceholder.textContent = newWordAray.join(' ');        
    }

}