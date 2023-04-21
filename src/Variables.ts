//? Use meaningful variable names

//! Bad :

function between<T>(a1: T, a2: T, a3: T): boolean {
  return a2 <= a1 && a1 <= a3;
}

//* Good :

function between<T>(value: T, left: T, right: T): boolean {
  return left <= value && value <= right;
}


//? Use pronounceable variable names

//! Bad :

type DtaRcrd102 = {
    genymdhms: Date;
    modymdhms: Date;
    pszqint: number;
  }

//* Good :

type Customer = {
    generationTimeStamp: Date,
    modificationTimeStamp: Date,
    recordId: number,
}

//? Use the same vocabulary for the same type of variable

//! Bad :

function getUserInfo(): User;
function getUserDetails(): User;
function getUserData(): User;

//* Good :  

function getUser(): User;



//? Use searchable names

//! Bad :

// What the heck is 86400000 for?
setTimeout(restart, 86400000);

//* Good :

// Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000; // 86400000

setTimeout(restart, MILLISECONDS_PER_DAY);



//? Use explanatory variables

//! Bad :

declare const users: Map<string, User>;

for (const keyValue of users) {
  // iterate through users map
}

//* Good :

declare const users: Map<string, User>;

for (const [id, user] of users) {
  // iterate through users map
}

//? Avoid Mental Mapping

//! Bad :

const u = getUser();
const s = getSubscription();
const t = charge(u, s);

//* Good :

const user = getUser();
const subscription = getSubscription();
const transaction = charge(user, subscription);

//?  Don't add unneeded context

//! Bad :

type Car = {
    carMake: string;
    carModel: string;
    carColor: string;
  }
  
  function print(car: Car): void {
    console.log(`${car.carMake} ${car.carModel} (${car.carColor})`);
  }

//* Good :

type Car = {
    make: string,
    model: string,
    colour: string,
}

function print(car: Car): void {
    console.log(`${car.make} ${car.model} (${car.color})`);
}

//? Use default arguments instead of short circuiting or conditionals

//! Bad :

function loadPages(count?: number) {
    const loadCount = count !== undefined ? count : 10;
    // ...
  }

//* Good :

function loadPages(count:number = 10){
    //...
}

//? Use enum to document the intent

//! Bad :

const GENRE = {
    ROMANTIC: 'romantic',
    DRAMA: 'drama',
    COMEDY: 'comedy',
    DOCUMENTARY: 'documentary',
  }
  
  projector.configureFilm(GENRE.COMEDY);
  
  class Projector {
    // declaration of Projector
    configureFilm(genre) {
      switch (genre) {
        case GENRE.ROMANTIC:
          // some logic to be executed 
      }
    }
  }

//* Good :

enum GENRE {
    ROMANTIC,
    DRAMA,
    COMEDY,
    DOCUMENTARY,
  }
  
  projector.configureFilm(GENRE.COMEDY);
  
  class Projector {
    // declaration of Projector
    configureFilm(genre) {
      switch (genre) {
        case GENRE.ROMANTIC:
          // some logic to be executed 
      }
    }
  }

  