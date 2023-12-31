function extract(content) {
    const text = document.getElementById(content).textContent;
    const pattern = /\(([^)]+)\)/g;
    const result = [];
    
    let match = pattern.exec(text);
    
    while(match) {
    result.push(match[1]);
    match = pattern.exec(text);
    }
    
    return result.join("; ");       
}