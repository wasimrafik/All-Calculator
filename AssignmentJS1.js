
function addition(){
    var input1 = Number (document.getElementById("user1").value);  
    var input2 = Number (document.getElementById("user2").value);  

    var result = document.getElementById("Resultdp");

    var mix = input1 + input2;

    Resultdp.innerHTML += "Addition of " + input1 + " + " + input2  + " = " + mix + " </br> ";
}

function subtraction(){

        var input1 = Number (document.getElementById("user1").value);

        var input2 = Number (document.getElementById("user2").value);
      
        var result = document.getElementById("Resultdp");

        var mix = input1 - input2;

        Resultdp.innerHTML += "Subtraction of " +  input1 + " - " + input2  + " = " + mix + " </br> ";

}

function Multiplication(){

    var input1 = Number (document.getElementById("user1") .value);

    var input2 = Number (document.getElementById("user2") .value);

    var result = document.getElementById("Resultdp");

    var mix = input1 * input2;

    Resultdp.innerHTML += "Multiplication of " +  input1 + " * " + input2  + " = " + mix + " </br> ";
}

function Division(){


    var input1 = Number (document.getElementById("user1") .value);

    var input2 = Number (document.getElementById("user2") .value);

    var result = document.getElementById(Resultdp);

    var mix = input1 / input2;

    Resultdp.innerHTML += "Division of " + input1 + " / " + input2  + " = " + mix + " </br> ";
}

function Exponential(){

    var input1 = Number (document.getElementById("user1") .value);

    var input2 = Number (document.getElementById("user2") .value);

   

    var result = document.getElementById(Resultdp)
    var mix = input1 ** input2;
    Resultdp.innerHTML += "Exponential of " +  input1 + " <sup> " + input2 + " </sup> " + " = " + mix + " </br> " ; 
}

function Remainder(){
    var input1 = Number (document.getElementById("user1") .value);
    var input2 = Number (document.getElementById("user1") .value);
    var result = document.getElementById("Resultdp");

    var mix = input1 % input2;
    Resultdp.innerHTML += "Remainder of " + input1 + " % " + input2  + " = " + mix + " </br> " ;

}

function Reset(){
    var input1 = Number (document.getElementById("user1") .value=" ");
    var input2 = Number (document.getElementById("user2") .value=" ");
    document.getElementById("Resultdp").innerHTML = " ";
}