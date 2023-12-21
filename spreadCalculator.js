function calculateSpreadOutcome() {
    // Get user input for scores and point spread
    const scoreTeamA = parseFloat(prompt("Enter the final score of Team A:"));
    const scoreTeamB = parseFloat(prompt("Enter the final score of Team B:"));
    const pointSpread = parseFloat(prompt("Enter the point spread:"));

    // Validate input
    if (isNaN(scoreTeamA) || isNaN(scoreTeamB) || isNaN(pointSpread)) {
        alert("Please enter valid numbers for scores and point spread.");
        return;
    }

    // Calculate the margin of victory
    const marginOfVictory = scoreTeamA - scoreTeamB;

    // Determine the outcome and display the result
    let outcome;
    if (marginOfVictory > pointSpread) {
        outcome = "Team A covers the spread";
    } else if (marginOfVictory < -pointSpread) {
        outcome = "Team B covers the spread";
    } else {
        outcome = "The game is a push (no winner against the spread)";
    }

    alert(outcome);
}

// Call the function when the page is loaded
calculateSpreadOutcome();
