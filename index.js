let wakeDog = function(dogName, dogBreed){
  let ex = `Wake ${dogName} the ${dogBreed}`;
  console.log(ex);
  return ex;
}

let leashDog = function(dogName, dogBreed){
  let ex = `Leash ${dogName} the ${dogBreed}`;
  console.log(ex);
  return ex;
}

let walkToPark = function(dogName, dogBreed){
  let ex = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(ex);
  return ex;
}

let throwFrisbee = function(dogName, dogBreed){
  let ex = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(ex);
  return ex;
}

let walkHome = function(dogName, dogBreed){
  let ex = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(ex);
  return ex;
}

let unleashDog = function(dogName, dogBreed){
  let ex = `Unleash ${dogName} the ${dogBreed}`;
  console.log(ex);
  return ex;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
  return routine.map(fn => fn(dogName, dogBreed))
}