
var min = 0;
var sec = 0;
var milli = 0;

var minNow = document.getElementById("min");
var secNow = document.getElementById("sec");
var milliNow = document.getElementById("milli");
var interval;

function timer(){
    milli++;
    milliNow.innerHTML = milli
    if(milli >= 100){
        sec++;
        secNow.innerHTML = sec
        milli = 0;
    }else if(sec >= 60){
        min++;
        minNow.innerHTML = min;
        min = o;
    }
    
    
}

function start(){
    interval = setInterval(timer,10);
    document.getElementById('start').style.display='none';
    document.getElementById('buttons').style.marginLeft='50px';
    document.getElementById('reset').style.marginLeft='5px';
}

function stop(){
    clearInterval(interval);
    document.getElementById('start').style.display='';
    document.getElementById('buttons').style.marginLeft='';
    document.getElementById('reset').style.marginLeft='95px';

    
}

function reset(){
    var min = 00;
    var sec = 00;
    var milli = 00;
    minNow.innerHTML = min;
    secNow.innerHTML = sec;
    milliNow.innerHTML = milli;
    stop();
}