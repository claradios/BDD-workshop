
const updateScore = () => {
  const userScore = document.getElementById('user-score');
  const computerScore = document.getElementById('machine-score');
  
  userScore.innerHTML = window.userScore;
  computerScore.innerHTML = window.computerScore;
};

export default updateScore;
