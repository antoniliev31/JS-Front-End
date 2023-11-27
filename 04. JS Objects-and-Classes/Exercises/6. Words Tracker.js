function solve(input) {
    const [searchWords, ...words] = input;
    
    const wordOccurrences = searchWords.split(" ").reduce((acc, curr) => {
        acc[curr] = 0;        
        return acc;
    }, {});

    words.forEach(word => {
        if (wordOccurrences.hasOwnProperty(word)) {
            wordOccurrences[word] += 1;
        }
    });

    Object.entries(wordOccurrences)
        .sort(([, countA], [, countB]) => countB - countA)
        .forEach(([word, occurrences]) => {
            console.log(`${word} - ${occurrences}`);
        });
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

