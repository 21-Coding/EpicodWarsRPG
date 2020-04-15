export const storeState = (initialState) => {
  let currentState = initialState;
  return (functionStateChange) => {
    const newState = functionStateChange(currentState);
    currentState = {...currentState};
    return newState;
  }
}

const initialGame =  { 
  playerName: "",
  playerAttackStrength: 1,
  playerLifebar: 5, 
  bossName: "",
  bossAttackStrength: 5,
  bossLifebar: 10,
}

//  const masterGame = storeState(initialGame);
 
   const startGame = storeState(initialGame); //only do once? - (runs player/boss objects through storeState)
    const input = "James";
    const assignName = changeState("playerName")(input);
    const loadBoss = changeState("bossName")("Brooker T");
  
    //Act
    const startGame2 = startGame(assignName); //changing state
    const startGame3 = loadBoss(startGame2);

 export const changeState = (prop) => {  //prop = property
  return (value) => {           // value = value of property
    return (state) => ({        // current state of object
      ...state,                 // create copy of state
      [prop] : (state[prop]) + value   //alter and return copy of state to adhere to change in property's value
    })
  }
}
// const playerLBMax = player.lifebar (callWhenEnterFightMode)
const enterWinState = changeState(playerLifebar)(10); //Add 10 points to playerLifeBar after win

const classLesson = changeState(playerAttackStrength)(3); //Add 3 points to playerAttackStrength
const standUp = changeState(playerAttackStrength)(1); //Add 1 point to playerAttackStrength






// -Enter trainingMode: fully replenish lifebar
// //training modes (buttons, each one triggers on e of these stateAlters)
// -standUp increase playerAttackStrength by1
// -classLesson increases playerAttackStrength by2

// //fight modes
// -attack hits lower healthbar (player => boss, boss => player)
// -boss loses: 1. rassignBoss
//              2. STRETCH: student: add stack ... increase lifebar max (onlyWithBattleVictory)
//              3. enterTrainingRoom
// -student loses: 
//              1. Restart Game (state after uploading name)





// brainstorm:

// stretchgoals:
// -confidence bool

// // stretch goal -> students & teacher squads have training grounds
// // squads fight bosses
// // attack strength starts at 2-3
// // fighting mode/ training - squad chooses when to go to battle, after battles, auto go back to prepping

// mainObjects
// bosses: {
//   name: ("brooker T" or "travis scott") //final boss - Micheal
//   strength: (static)
//   lifebar:
// }


// squads: {
//   players: {
//     name: ""
//     -attackStrength : (number increments)  
//     -langWeapon: "C#"
//     -lifebar (10/10): (increments/decrements)
//     // -level: 
//   }
// }

// objects that effect main objects state:

// standUp (attackStrength)(value) +1
// classLesson (attackStrength)(value) + 2  -- ex: babel(attackStrength)(1), webpack(attakcStrength)(2)
// Stack (lifebar)(value) + 3


// assign weapons: (langWeapon)("React")

