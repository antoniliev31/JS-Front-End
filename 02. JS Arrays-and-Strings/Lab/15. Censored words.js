function censoredWords2(text, word) {
    
    const censorsipWord = "*".repeat(word.length);
    
    let censoredText = text;

    while(censoredText.includes(word)) {
        
        censoredText = censoredText.replace(word, censorsipWord);
    }    
    
    console.log(censoredText);
}

censoredWords2("A small sentance with small some words", "small");