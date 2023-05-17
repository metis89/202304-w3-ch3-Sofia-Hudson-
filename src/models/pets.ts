/* eslint-disable no-unused-vars */
export type PetStructure = {
  id: string;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner: string;
};

export class Pet implements PetStructure {
  static generateId() {
    return Math.trunc(Math.random() * 1_000_000).toString();
  }

  id: string;
  isAdopted: boolean;
  owner: string;

  constructor(public name: string, public breed: string) {
    this.id = Pet.generateId();
    this.isAdopted = false;
    this.owner = "";
  }
}
