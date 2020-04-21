const computer = {
  computerChoice: () => {
    const choice = {
      0: 'rock',
      1: 'paper',
      2: 'scissors',
    };
    const choiceNumber = Math.floor(Math.random() * 3); //NOSONAR

    return choice[choiceNumber];
  },
};

export default computer;
