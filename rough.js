// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    console.log(`${this.name} makes a ${this.sound} sound`);
  }
}

class Horse extends Animal {
  constructor(name, sound, color) {
    super(name, sound);
    this.color = color;
  }
}

let kacie = new Horse("Kacie", "Bahhh", "black");
