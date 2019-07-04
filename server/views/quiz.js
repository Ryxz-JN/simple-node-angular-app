var result;
var score = 0;

const getQuestion = () => {
    $.get( 'api/random', (data) => {
        var path = "./img/"
        var path_a1 = path + data['path_a1'];
        var path_a2 = path + data['path_a2'];
        document.getElementById("question").innerHTML = data['title'];
        document.getElementById("a1").innerHTML = data['a1'];
        document.getElementById("a2").innerHTML = data['a2'];
        document.getElementById("img1").style.backgroundImage = "url("+path_a1+")";
        document.getElementById("img2").style.backgroundImage = "url("+path_a2+")";
        result = data ["result"];
    }); 
}
 
function changeText(id, text) {
    document.getElementById(id).innerHTML = text;
}

function add13(newPoints) {
    score = score + newPoints;
    return score;
}

function progress(timer, timetotal, $element) {
    var progressBarWidth = timer * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timer/60) + ":"+ timer%60);
    if(timer > 0) {
        setTimeout(function() {
            progress(timer - 1, timetotal, $element);
        }, 1000);
    }
};

progress(600, 600, $('#progressBar'));

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    progress();
}

function resetScore(){
    document.getElementById('score').innerHTML = 0;
    score = 0;
};

$(document).ready(function(){
    $('#a1').hide();
    $('#a2').hide();    
});

$(document).ready(function(){ 
   
    $('#q').click(function() {
        $('#q').hide();
        var delay = $(this);
        delay.prop('disabled', true);
        setTimeout(function(){
        delay.prop('disabled', false);
        }, 3000);
        getQuestion();
        $('#a1').delay(3000).fadeIn();
        $('#a2').delay(3000).fadeIn();
        var oneMinute = 59 * 1,
            display = document.querySelector('#time');
        startTimer(oneMinute, display); 
        setInterval(function(){
            alert("Your endscore is " + score);
            resetScore();
        }, 61000);              
    });
    
    $('#a1').click(function(){
        getQuestion();
        $('#a1').delay(3000).fadeIn();
        $('#a2').delay(3000).fadeIn(); 
    });  
    
    $('#a2').click(function(){
        getQuestion();
        $('#a1').delay(3000).fadeIn();
        $('#a2').delay(3000).fadeIn(); 
    });                     
});

$(document).ready(function(){
    $('#a1').click(function(){
        if('a1' == result) {
            changeText ("a1", "Correct!");
            document.getElementById("a1").style.backgroundColor = "rgb(61, 190, 61)";
            setTimeout(function(){
                document.getElementById("a1").style.backgroundColor = "rgb(110, 145, 178)";
           },2200);
           $('#score').text("Points: " + add13(13));
        } else {
            changeText ("a1", "Wrong...");
            document.getElementById("a1").style.backgroundColor = "rgb(206, 13, 13)";
            setTimeout(function(){
                document.getElementById("a1").style.backgroundColor = "rgb(110, 145, 178)";
           },2200);
        }
    });
    $('#a2').click(function(){
        if('a2' == result) {
            changeText ("a2", "Correct!");
            document.getElementById("a2").style.backgroundColor = "rgb(61, 190, 61)";
            setTimeout(function(){
                document.getElementById("a2").style.backgroundColor = "rgb(110, 145, 178)";
           },2200);
           $('#score').text("Points: " +add13(13));
        } else {
            changeText ("a2", "Wrong...");
            document.getElementById("a2").style.backgroundColor = "rgb(206, 13, 13)";
            setTimeout(function(){
                document.getElementById("a2").style.backgroundColor = "rgb(110, 145, 178)";
           },2200);
        }
    });
});