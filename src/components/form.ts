import { Component } from "./component";
import "./form.css";
export class Form extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <form>
    <p>Add New Pet</p>
    <label>
    Pet Id: <input type="text">
    </label>
    <label>
    Name: <input type="text">
    </label>
    <label>
    Breed: <input type="text">
    </label>
    </form>
    `;
  }
}
