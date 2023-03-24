window.onload = function () {
    //Executa um JS após o carregamento da página.

    var minutes = 00;
    var seconds = 00;
    var tens = 00; 

    
    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    var appendMinutes = document.getElementById('minutes');

    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');

    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval) // O método clearInterval() limpa o temporizador definido como método  setInterval().

        Interval = setInterval(startTimer,10)
        //O método setInterval chama uma função em intervalor específicos (milissegundos).
    };

    buttonStop.onclick = function() {
        clearInterval(Interval);
    };

    buttonReset.onclick = function() {
        clearInterval(Interval);

        tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    };

    function startTimer() {
        tens++ // tens++ pós incremento  ---- pré incremento 
        if(tens <=9){
            appendTens.innerHTML = "0" + tens
        }

        if(tens > 9) {
            appendTens.innerHTML = tens;
        }

        if(tens > 99){
            console.log('seconds');

            seconds++

            appendSeconds.innerHTML = "0" + seconds;

            tens = 0;

            appendTens.innerHTML = "0" + 0
        }

        if (seconds > 9) {
            appendSeconds
            .innerHTML = seconds
        }

        if (seconds > 59){
            console.log('minutes');

            minutes++

            appendMinutes.innerHTML = "0" + minutes;

            seconds = 0;

            appendSeconds.innerHTML = "0" + 0
        }
    }


}