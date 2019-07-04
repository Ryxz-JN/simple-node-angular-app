var result;

var score = 0;

const getQuestion = () => {
    $.get( 'api/random', (data) => {
        /*renderQ(data['title'],"");
        renderA(data['a1']);
        renderA(data['a2']);*/
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

$(document).ready(function(){
    $('#a1').hide();
    $('#a2').hide();
    
});

$(document).ready(function(){    
    getQuestion();
    $('#a1').delay(3000).fadeIn();
    $('#a2').delay(3000).fadeIn();
    
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