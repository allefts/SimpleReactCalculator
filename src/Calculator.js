import React, { Component } from "react";

class CalculatorComponents extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.clickHandler} value={0} name="0">
          0
        </button>
        <button onClick={this.props.clickHandler} value={1} name="1">
          1
        </button>
        <button onClick={this.props.clickHandler} value={2} name="2">
          2
        </button>
        <button onClick={this.props.clickHandler} value={3} name="3">
          3
        </button>
        <button onClick={this.props.clickHandler} value={4} name="4">
          4
        </button>
        <button onClick={this.props.clickHandler} value={5} name="5">
          5
        </button>
        <button onClick={this.props.clickHandler} value={6} name="6">
          6
        </button>
        <button onClick={this.props.clickHandler} value={7} name="7">
          7
        </button>
        <button onClick={this.props.clickHandler} value={8} name="8">
          8
        </button>
        <button onClick={this.props.clickHandler} value={9} name="9">
          9
        </button>
        <div></div>
        <button onClick={this.props.clickHandler} name="+">
          +
        </button>
        <button onClick={this.props.clickHandler} name="-">
          -
        </button>
        <button onClick={this.props.clickHandler} name="/">
          /
        </button>
        <button onClick={this.props.clickHandler} name="*">
          *
        </button>
        <button onClick={this.props.clickHandler} name="=">
          =
        </button>
        <button onClick={this.props.clickHandler} name="CE">
          CE
        </button>
      </div>
    );
  }
}

export default CalculatorComponents;
