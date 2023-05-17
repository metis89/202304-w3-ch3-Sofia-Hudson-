import { Pet } from "../models/pet";

export const getPets = (): Pet[] => [
  new Pet("Frank", "Dog"),
  new Pet("Bethoveen", "Dog"),
  new Pet("Snowball II", "Cat"),
  new Pet("Santa's Little Helper", "Dog"),
];
