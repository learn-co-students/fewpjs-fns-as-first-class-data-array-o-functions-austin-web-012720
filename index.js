const wakeDog = function (dogName, dogBreed) {
  let string = `Wake ${dogName} the ${dogBreed}`
  console.log( string )
  return string
}

const leashDog = function (dogName, dogBreed) {
  let string = `Leash ${dogName} the ${dogBreed}`
  console.log( string )
  return string
}

const walkToPark = function (dogName, dogBreed) {
  let string = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log( string )
  return string
}

const throwFrisbee = function (dogName, dogBreed) {
  let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log( string )
  return string
}

const walkHome = function (dogName, dogBreed) {
  let string = `Walk home with ${dogName} the ${dogBreed}`
  console.log( string )
  return string
}

const unleashDog = function (dogName, dogBreed) {
  let string = `Unleash ${dogName} the ${dogBreed}`
  console.log( string )
  return string
}

let routine = [
  wakeDog, 
  leashDog, 
  walkToPark, 
  throwFrisbee,
  walkHome,
  unleashDog
]

function exerciseDog(dogName, dogBreed) {
  let arr = []
  for (let i = 0; i < routine.length; i++) {
    arr.push(routine[i](dogName, dogBreed))
  }
  return arr
}
