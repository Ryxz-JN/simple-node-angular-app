var result;

const getQuestion = () => {
    $.get( 'api/random', (data) => {
        /*renderQ(data['title'],"");
        renderA(data['a1']);
        renderA(data['a2']);*/
        var path = "../img/s"
        var path_a1 = path + data['path_a1'];
        var path_a2 = path + data['path_a2'];
        document.getElementById("question").innerHTML = data['title'];
        document.getElementById("a1").innerHTML = data['a1'];
        document.getElementById("a2").innerHTML = data['a2'];
        /*document.getElementById("img1").src = path_a1;
        document.getElementById("img2").src = path_a2;*/
        result = data ["result"];
    }); 
}
 
function changeText(id, text) {
    document.getElementById(id).innerHTML = text;
}

$(document).ready(function(){
    $('#a1').hide();
    $('#a2').hide();
});

$(document).ready(function(){
    $('#q').click(function() {
        var delay = $(this);
        delay.prop('disabled', true);
        setTimeout(function(){
            delay.prop('disabled', false);
        }, 3000);
        getQuestion();
        $('#a1').delay(3000).fadeIn();
        $('#a2').delay(3000).fadeIn();
        setTimeout(function(){
            changeText("q", "Next Question");
        }, 3000);       
    }); 

    $('#a1').click(function(){
        var delay = $(this);
        delay.prop('disabled', true);
        setTimeout(function(){
            delay.prop('disabled', false);
        }, 1000);
        getQuestion();
        $('#a1').delay(3000).fadeIn();
        $('#a2').delay(3000).fadeIn(); 
    });  
    $('#a2').click(function(){
        var delay = $(this);
        delay.prop('disabled', true);
        setTimeout(function(){
            delay.prop('disabled', false);
        }, 1000);
        getQuestion();
        $('#a1').delay(3000).fadeIn();
        $('#a2').delay(3000).fadeIn(); 
    });                        
});

$(document).ready(function(){
    $('#a1').click(function(){
        if('a1' == result) {
            changeText ("a1", "Correct!");
        } else {
            changeText ("a1", "Wrong...");
        }
    });
    $('#a2').click(function(){
        if('a2' == result) {
            changeText ("a2", "Correct!");
        } else {
            changeText ("a2", "Wrong...");
        }
    });
});
