import React, { Component } from "react";
import Flowchart from "react-simple-flowchart";

export class Flowdemo extends Component {
  constructor(props) {
    super(props);
    const code = `st=>start: Begin
e=>end: End
op1=>operation: Operation 1|department1
op2=>operation: Operation 2|department2
sub=>subroutine: Go To Google|external:>http://www.google.com
cond=>condition: Google?
st(right)->op1(right)->op2(right)->cond(yes)->
cond(no)->e`;

    const opt = {
      x: 0,
      y: 0,
      "line-width": 1,
      "line-length": 100,
      "text-margin": 10,
      "font-size": 14,
      "font-color": "black",
      "line-color": "black",
      "element-color": "black",
      fill: "white",
      "yes-text": "yes",
      "no-text": "no",
      "arrow-end": "block",
      scale: 1,
      symbols: {
        start: {
          type: "doublecircle",
          "inner-styles": "fill: white",
        },
        end: {
          type: "doublecircle",
          "inner-styles": "fill: white",
        },
        "start-end": {
          "type": "diamond",
          width: 50,
          height: 50,
          fill: "white",
          lineWidth: 1,
          "line-color": "black",
        },
      },
    };

    this.state = {
      code,
      opt,
      elementText: "none",
    };
  }

  handleCodeChange(e) {
    this.setState({
      code: e.target.value,
    });
  }

  handleOptChange(e) {
    this.setState({
      opt: JSON.parse(e.target.value),
    });
  }

  render() {
    const { code, opt, elementText } = this.state;
    return (
      <div>
        <Flowchart
          chartCode={code}
          options={opt}
          onClick={(elementText) => this.setState({ elementText })}
        />
      </div>
    );
  }
}