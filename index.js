// code your solution here
function saturdayFun(activity = "roller-skate", batheDog = false) {
    let result = `This Saturday, I want to ${activity}!`;

    if (activity === "roller-skate" && batheDog) {
        result = "This Saturday, I want to bathe my dog!";
    }

    return result;
}

  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }