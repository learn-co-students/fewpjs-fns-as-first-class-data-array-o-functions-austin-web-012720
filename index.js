function wakeDog(dogName, dogBreed) {
  const wd = `Wake ${dogName} the ${dogBreed}`;
  return wd;
}
function leashDog(dogName, dogBreed) {
  const ld = `Leash ${dogName} the ${dogBreed}`;
  return ld;
}
function walkToPark(dogName, dogBreed) {
  const wtp = `Walk to the park with ${dogName} the ${dogBreed}`;
  return wtp;
}
function throwFrisbee(dogName, dogBreed) {
  const tf = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  return tf;
}
function walkHome(dogName, dogBreed) {
  const wh = `Walk home with ${dogName} the ${dogBreed}`;
  return wh;
}
function unleashDog(dogName, dogBreed) {
  const ud = `Unleash ${dogName} the ${dogBreed}`;
  return ud;
}

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog,
];

function exerciseDog(dogName, dogBreed) {
  const array = [];
  for (let i = 0; i < routine.length; i++) {
    let result = (routine[i](dogName, dogBreed));
    array.unshift(result);
  }
  return array;
}
