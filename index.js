var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

document.querySelector("img").setAttribute("src", "images/dice"+randomNumber1+".png")
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png")

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "🏆Player left WIN!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player right WIN!🏆";
}
else
{
    document.querySelector("h1").innerHTML = "🎲DraW🎲";
}