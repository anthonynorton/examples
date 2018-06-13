let _population = 0;


function incrementPopulation() {
  _population++;
}

class Cat {
  constructor() {
    incrementPopulation();
  }
}

Object.defineProperty(Cat, 'population', { get() { return Number(_population); } });

module.exports = Cat;

