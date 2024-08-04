let scores = {
    you: 0,
    opponent: 0
};

// Example correct answers for the competition questions
const correctAnswers = {
    'Question 1': 'Paris',
    'Question 2': '4',
    'Question 3': 'Harper Lee',
    'Question 4': '100°C',
    'Question 5': 'Jupiter'
};

// Timer variables
let timerStarted = false;
let timer;
let countdownInterval;
let timeLeft = 9; // Timer set to 7 seconds

function selectChoice(button, participant, answer, question) {
    // Start the timer if it hasn't started yet
    if (!timerStarted) {
        startTimer();
    }

    // Disable all choices for the current question
    const choices = button.parentNode.querySelectorAll('.choice');
    choices.forEach(choice => {
        choice.disabled = true;
        if (choice.textContent === correctAnswers[question]) {
            choice.style.backgroundColor = 'green'; // Highlight the correct answer
        } else {
            choice.style.backgroundColor = '#ccc'; // Highlight wrong answers
        }
    });

    // Update score if the selected answer is correct
    if (answer === correctAnswers[question]) {
        scores[participant] += 10;
        document.getElementById(`${participant}-score`).textContent = `Score: ${scores[participant]}`;
    }
}

function startTimer() {
    timerStarted = true;
    timeLeft = 9; // Reset time left to 7 seconds
    document.getElementById('timer-display').textContent = `Time left: ${timeLeft}s`;

    countdownInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').textContent = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            endGame();
        }
    }, 1000); // Update every second
}

function endGame() {
    // Stop the timer
    clearInterval(countdownInterval);

    // Determine the winner based on the highest score
    let winner = '';
    if (scores.you > scores.opponent) {
        winner = 'You';
    } else if (scores.opponent > scores.you) {
        winner = 'Opponent';
    } else {
        winner = 'No one'; // In case of a tie
    }

    declareWinner(winner.toLowerCase());
}

function declareWinner(winner) {
    // Show winner popup
    alert(`WINNER: ${winner.charAt(0).toUpperCase() + winner.slice(1)}`);

    // Redirect to index.html after 3 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000); // Redirect after 3 seconds
}
