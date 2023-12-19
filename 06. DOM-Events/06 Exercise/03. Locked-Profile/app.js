function lockedProfile() {
    
    let buttons = Array.from(document.getElementsByTagName('button'));
    
    let showInfoUser1 = document.getElementById('user1HiddenFields');
    let showInfoUser2 = document.getElementById('user2HiddenFields');
    let showInfoUser3 = document.getElementById('user3HiddenFields');
   
    for (const button of buttons) {
        
        button.addEventListener('click', showMore);
           
    }

    function showMore(e) {
        let btn = e.target;
        let profil = btn.parentElement;
        let children = Array.from(profil.children);
        
        let unloced = children[4];
        let additionalInfo = children[9];

        if (!unloced.checked) {
            return;
        }

        if (btn.textContent === 'Show more') {
            additionalInfo.style.display = 'block';
            btn.textContent = 'Hide it';
        } else {
            additionalInfo.style.display = 'none';
            btn.textContent = 'Show more';
        }
    }

}