const max=prompt("Enter the max Number:");

let random=Math.floor(Math.random()*max)+1;

let guess=prompt("Enter guess Number :")

while(true){
    if(guess == "quit"){
        console.log("opss your the quit the game");
        break;
    }
    if(random == guess){
        console.log("you are Enter the correct Number congrats!! Number is:" ,random);
        break;
    }
    else if(guess > random){
        guess=prompt("HINT:you was Enter the large Number!! please try again");
    }
    else {
        guess= prompt("HINT: you was Enter to small Number!! please try again");
    }
}

