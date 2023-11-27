function extractOddOccurrences(input) {
    const words = input.split(" ");
    const wordOccurrences = [];

    words.forEach((word, index) => {
        const lowercasedWord = word.toLowerCase();
        const existingWord = wordOccurrences.find(entry => entry.word === lowercasedWord);

        if (!existingWord) {
            wordOccurrences.push({ word: lowercasedWord, count: 1, index });
        } else {
            existingWord.count += 1;
        }
    });
    
    const result = wordOccurrences
        .filter(entry => entry.count % 2 !== 0)
        .map(entry => entry.word);

    console.log(result.join(" "));
}

extractOddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
