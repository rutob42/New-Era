let countdownInterval;

function startCountdown(){
    const timeInput = document.getElementById('timeInput').value;
    let time = parseInt(timeInput,10);

    if(isNaN(time)||time <= 0){
        alert('Please enter a valid number of seconds');
        return;
    }
    clearInterval(countdownInterval);
    document.getElementById('countdown').textContent = time;

    countdownInterval = setInterval(() =>{
        time--;
        document.getElementById('countdown').textContent = time;

        if(time <= 0){
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = 'Time\'s up!';
        }
        
    },1000);
}