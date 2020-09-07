import React from "react";
import "./App.css";
import CalculatorComponents from "./Calculator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      seq1: 0,
      seq2: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  // Need to:
  //1.Get the currently clicked target
  //2.Add it to a string unless it's an option and not a number
  //3.Once an option is clicked it will add the other numbers to a different string
  //4.Checks for both strings to be !empty
  //5.If both strings are not empty it will conduct the operation
  //6.If user does not press equals and keeps adding options it will conduct the operations and set them as string1
  optionArray = ["+", "-", "/", "CE", "*"];

  sequence1 = "";
  sequence2 = "";
  operator = "0";

  clickHandler = (e) => {
    e.preventDefault();
    let name = e.target.name; //SETS THE PRESSED KEY AS NAME
    if (name === "=") {
      //IF NAME IS EQUAL SIGN, RUN THE OPERATION
      this.sequence1 = parseInt(this.sequence1); //TURNS STRINGS INTO INTEGERS
      this.sequence2 = parseInt(this.sequence2);

      switch (this.operator) {
        case "+":
          this.setState({ result: this.sequence1 + this.sequence2 });
          break;
        case "-":
          this.setState({ result: this.sequence1 - this.sequence2 });
          break;
        case "/":
          this.setState({ result: this.sequence1 / this.sequence2 });
          break;
        case "*":
          this.setState({ result: this.sequence1 * this.sequence2 });
          break;
        default:
          break;
      }
      this.sequence1 = "";
      this.sequence2 = "";
    } else if (name === "CE") {
      this.setState({ result: 0, seq1: 0, seq2: 0 });
      this.sequence1 = "";
      this.sequence2 = "";
      this.operator = "0";
      name = "";
    }

    if (this.optionArray.includes(name)) {
      this.operator = name; //sets the operator equal to what the user wants to do
    } else if (!this.optionArray.includes(name)) {
      // this.operator !== "0"
      //   ? (this.sequence2 += name)
      //   : (this.sequence1 += name);

      if (this.operator !== "0") {
        this.sequence2 += name;
        this.setState({ seq2: this.sequence2 });
      } else {
        this.sequence1 += name;
        this.setState({ seq1: this.sequence1 });
      }

      // console.log(`${this.sequence1} SEQ1`);
      // console.log(`${this.sequence2} SEQ2`);
    }
  };

  render() {
    return (
      <div>
        <h2>
          Calculator {this.state.seq1} {this.operator} {this.state.seq2}
        </h2>
        <h3>Result = {this.state.result}</h3>
        <CalculatorComponents clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;
