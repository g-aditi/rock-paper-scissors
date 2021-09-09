let playerScore = 0;
let computerScore = 0;
const anyButton = document.querySelectorAll('input');

function computerChoice() 
{
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * 2)];
}

function disableButtons() 
{
    anyButton.forEach(element => {
        element.disabled = true;
    })
}

function oneRound(playerSelection) 
{
    let computerSelection = computerChoice();
    let result = "";
    let playerRes = "";
    let computerRes = "";

    if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
        playerSelection == 'Scissors' && computerSelection == 'Paper' ||
        playerSelection == 'Paper' && computerSelection == 'Rock') 
        {
            playerScore++;
            result = ('<br><br>You chose ' + playerSelection + ' and I chose ' + computerSelection + '.');
            playerRes = playerScore;
            computerRes = computerScore;

            if (playerScore == 5) 
            {
                result += '<br>Yay! You won this game! Reload the page to play again.';
                disableButtons();
            }
        }

    else if (playerSelection == computerSelection) 
    {
        result = ('<br><br>That\'s a tie! We both chose ' + playerSelection + '.');
        playerRes = playerScore;
        computerRes = computerScore;
    }

    else 
    {
        computerScore++;
        result = ('<br><br>You chose ' + playerSelection + ' and I chose ' + computerSelection + '.');
        playerRes = playerScore;
        computerRes = computerScore;

        if (computerScore == 5) 
        {
            result += '<br>And I win this game! Reload the page to replay.';
            disableButtons();
        }
    }

    if (computerScore + playerScore == 5 && computerScore != 5 && playerScore != 5)
    {
        if (playerScore > computerScore) 
            {
                result += '<br>Yay! You won this game! Reload the page to play again.';
                disableButtons();
            }
        
        else if (computerScore > playerScore) 
        {
            result += '<br>And I win this game! Reload the page to replay.';
            disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result;
    document.getElementById('playerRes').innerHTML = playerRes;
    document.getElementById('computerRes').innerHTML = computerRes;
    return
}

anyButton.forEach(button =>{
    button.addEventListener('click', function(){
        oneRound(button.value);
    })
})