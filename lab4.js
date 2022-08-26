function selection(){

    var select = document.getElementById("selection").value;
    document.getElementById("display").innerHTML="You have selected "+ select;

    if (select == "Divition"){
        document.getElementById("n3").style.display= "none";
        
        }
        else{
    
            document.getElementById("n3").style.display="inline";
        }
    
    
}

function calculate(){

    document.getElementById("answer").style.display="inline";

    var select = document.getElementById("selection").value;

    var x = Number(document.getElementById("n1").value);
    var y = Number(document.getElementById("n2").value);
    var z = Number(document.getElementById("n3").value);

    var answer;

    if(select == "Addition"){

        answer = x + y + z;
        document.getElementById("answer").innerHTML="Answer is : "+ answer;
    }

    else if(select == "Subsitute"){


        answer = x - y - z;
        document.getElementById("answer").innerHTML="Answer is : "+ answer;
    }

    else if(select == "Multipication"){

        answer = x * y * z;
        document.getElementById("answer").innerHTML="Answer is : "+ answer;
    }

    else{

        if( y == 0 ){

            document.getElementById("answer").innerHTML="You can’t divide by Zero";
        }
        else{
        answer = x / y;
        document.getElementById("answer").innerHTML="Answer is : "+ answer;
        }
    }
}

function empty(){

    document.getElementById("answer").style.display="none";
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
    document.getElementById("n3").value="";

}

function hi(){
    var first = document.getElementById("fname").value;
    var second = document.getElementById("lname").value;
    
    doucument.getElementById("para").innerHTML="Welcome" + first + second + "to the world of Vuejs";
    }