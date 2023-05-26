class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return super.definition() + " Deciduous trees shed their leaves annually.";
    }
  }
  
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return super.definition() + " Evergreens keep their leaves all year round.";
    }
  }
  
  const maple = new Tree("Maple");
  const oak = new Deciduous("Oak", "Professor");
  const fir = new Evergreen("Fir", "Douglas");
  
  console.log(maple.species); // "Maple"
  console.log(oak.species); // "Oak"
  console.log(oak.name); // "Professor"
  console.log(fir.species); // "Fir"
  console.log(fir.name); // "Douglas"
  
  console.log(Tree.definition()); // "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
  console.log(Deciduous.definition()); // "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually."
  console.log(Evergreen.definition()); // "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round."
  