function Animal(name, species, hunger) {
  this.name = name;
  this.species = species;
  this.hunger = hunger;

  this.feed = (amountOfFood) => {
    this.hunger += amountOfFood;
    console.log(
      `you fed ${this.name} ${amountOfFood} amount of food. It now has ${this.hunger}`
    );
  };
}

const zoo = {
  cash: 4000,
  spend: function (amount) {
    if (this.cash < amount) {
      throw "Not enough money!";
    }

    this.cash -= amount;
    console.log(`Remaining funds: ${this.cash}`);
  },
};

function Carnivore(name, species, hunger) {
  const animal = new Animal(name, species, hunger);

  return {
    feedCarnivoreFood: (amountOfFood) => {
      console.log(zoo.cash - 500 * amountOfFood);
      zoo.spend(zoo.cash - 500 * amountOfFood);
    },
    ...animal,
  };
}

function Herbivore(name, species, hunger) {
  const animal = new Animal(name, species, hunger);

  return {
    feedHerbivoreFood: (amountOfFood) => {
      zoo.spend(zoo.cash - 200 * amountOfFood);
    },
    ...animal,
  };
}

const lion = new Carnivore("lion", "cat", 0);
const zebra = new Herbivore("zebra", "horse", 0);

lion.feedCarnivoreFood(1);
