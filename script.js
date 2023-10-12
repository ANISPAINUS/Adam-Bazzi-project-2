// Prompt the user for their name
const playerName = prompt("Welcome to GC mini golf! What is your name?");

// Prompt the user if they would like to play 3 or 6 holes of golf
const holesToPlay = parseInt(prompt(`Hi, ${playerName}! Would you like to play 3 or 6 holes?`));

// Initialize variables to keep track of the total score and par
let totalScore = 0;
let totalPar;

// Determine the number of holes to play and calculate the total par
if (holesToPlay === 3) {
    totalPar = 9; // Total par for 3 holes is 9 (3 for each hole)
} else if (holesToPlay === 6) {
    totalPar = 18; // Total par for 6 holes is 18 (3 for each hole)
} else {
    console.log("Invalid number of holes selected. Please choose 3 or 6 holes.");
}

// Check if the totalPar is defined (valid holesToPlay selection)
if (totalPar !== undefined) {
    // Loop through each hole and calculate the total score
    for (let i = 1; i <= holesToPlay; i++) {
        const par = 3; // Par for each hole is 3
        const score = parseInt(prompt(`How many putts for hole ${i}? (par: ${par})`));

        // Display the specific hole they are on
        console.log(`Hole ${i}`);

        // Add the score for the current hole to the total score
        totalScore += score;
    }

    // Calculate the difference between the total score and total par
    const parDifference = totalPar - totalScore; // Corrected the subtraction order

    // Display the result based on the parDifference
    if (parDifference === 0) {
        alert(`Good game, ${playerName}. Your total par was: 0`);
    } else if (parDifference < 0) {
        alert(`Nice try, ${playerName}... Your total par was: +${Math.abs(parDifference)}`);
    } else {
        alert(`Great job, ${playerName}! Your total par was: -${parDifference}`);
    }
}
