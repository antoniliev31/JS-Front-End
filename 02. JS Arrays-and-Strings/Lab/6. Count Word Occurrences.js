function countOccurrences (text, word) {
    const words = text.split(" ");
    let count = 0;

    for (let index = 0; index < words.length; index++) {
        if(words[index] === word) {
            count++;
        }        
    }
    console.log(count);
}
countOccurrences("This is a word is and it also a sentance", "is")

// ================---------------==============

function countOccurrences (text, word) {
    const filtredArray = text.split(" ").filter(function (element) {
        
        return element === word;
    })

    console.log(filtredArray.length);
};

countOccurrences("This is a word is and it also is a sentance", "is")