// GUESSING GAME with HINTS


const num = prompt("Enter the Maximum Number ");

const random = Math.floor(Math.random() * num) + 1;

let guess = prompt("Guess the Number");
while(1)
{
    if(guess == "quit")
    {
        console.log("You Quit The Game !!");
        break;
    }

    if(guess == random)
    {
        console.log("Great!! You Guessed Correctly... Random Number was ", random);
        break;
    }
    else if(guess < random)
    {
        prompt("You Guess was too small... Please Try Again with greater Number !!");
    }
    else
    {
        prompt("You Guess was too large... Please Try Again  with smaller Number !!");
    }
    guess = prompt("Guess the Number");
}
