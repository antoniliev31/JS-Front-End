function toggle() {
    const button = document.getElementsByClassName("button")[0];
    const element = document.getElementById("extra");        
    
    if (element.style.display === 'none') {
        element.style.display = 'block';
        button.textContent = "Less";
    } else {
        element.style.display = 'none';
        button.textContent = "More";
    }
}