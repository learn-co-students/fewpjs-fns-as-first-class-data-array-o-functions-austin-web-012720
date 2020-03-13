function wakeDog(dogName="Byron", dogBreed="poodle"){
  return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName="Byron", dogBreed="poodle"){
  return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName="Bunny", dogBreed="Labrador"){
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName="Mary J. Blige", dogBreed="Papillon"){
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName="Santa Paws", dogBreed="Husky"){
  return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName="Lauren", dogBreed="Golden Retriever"){
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog,breed){
  return routine.map(fn => fn(dog,breed))
}
