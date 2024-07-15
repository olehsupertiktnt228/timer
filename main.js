$(document).ready(function() {
    let start;
    let elapsedTime = 0;
    let timerInterval;
    let running = false;

    function startTimer() {
        if (!running) {
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(function() {
                elapsedTime = Date.now() - startTime;
                updateTimerDisplay(elapsedTime);
            }, 10);
            running = true;
        }
    }

    function pauseTimer() {
        if (running) {
            clearInterval(timerInterval);
            running = false;
        }
    }

    function resetTimer() {
        clearInterval(timerInterval);
        running = false;
        elapsedTime = 0;
        updateTimerDisplay(elapsedTime);
    }

    function updateTimerDisplay(time) {
        let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((time % (1000 * 60)) / 1000);
        let milliseconds = Math.floor((time % 1000) / 10);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

        $("#timer").text(hours + ":" + minutes + ":" + seconds + ":" + milliseconds);
    }

    $("#start").click(startTimer);
    $("#pause").click(pauseTimer);
    $("#reset").click(resetTimer);
});


$('#close').click(function () {
    window.close();
})

