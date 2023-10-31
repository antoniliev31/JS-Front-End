function printListOfNames(names) {
    let sortedNmaes = names.sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < sortedNmaes.length; i++) {
        console.log(`${i+1}.${sortedNmaes[i]}`)        
    }
}

printListOfNames(["John", "Bob", "Christina", "Ema"]);