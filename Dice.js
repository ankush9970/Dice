var num1 = Math.floor(Math.random()*6+1);

var num2 = Math.floor(Math.random()*6+1);


document.getElementById("img-1").src = "img/Alea_"+num1+".png";

document.getElementById("img-2").src = "img/Alea_"+num2+".png";

if(num1>num2)
{
    document.getElementById("result").innerHTML = "Player 1 Wins!"; 
    document.getElementById("p1").style.color = "royalblue";
}
else if(num1<num2)
{
    document.getElementById("result").innerHTML = "Player 2 Wins!";
    document.getElementById("p2").style.color = "royalblue";
}
else{
    document.getElementById("result").innerHTML = "Draw!";
    document.getElementById("result").style.color = "red";
}

// var display = document.getElementById("dis").innerHTML;
// <i class='fas fa-flag-checkered' style='font-size:48px;color:red'></i>
// display = num1;

// document.getElementById("dis").innerHTML = Math.floor(Math.random()*6+1);