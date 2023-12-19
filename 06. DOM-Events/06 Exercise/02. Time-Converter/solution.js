function attachEventsListeners() {

    let days = document.getElementById('days');
    let daysButton = document.getElementById('daysBtn');
    let hours = document.getElementById('hours');
    let hoursButton = document.getElementById('hoursBtn');
    let minutes = document.getElementById('minutes');
    let minutesButton = document.getElementById('minutesBtn');
    let seconds = document.getElementById('seconds');
    let secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', () => {
        //days
        hours.value = Number(days.value) * 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    });
    hoursButton.addEventListener('click', () => {
        days.value = Number(hours.value) / 24  
        //hours
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    });
    minutesButton.addEventListener('click', () => {
        days.value = Number(minutes.value) /60 / 24        
        hours.value = Number(minutes.value) / 60;
        //minutes
        seconds.value = Number(minutes.value * 60);
    });
    secondsButton.addEventListener('click', () => {
        days.value = Number(seconds.value) / 60 / 60 / 24        
        hours.value = Number(seconds.value) / 60 / 60;
        minutes.value = Number(seconds.value) / 60;
        //seconds
    });


}