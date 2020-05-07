import React from 'react';
import "./styles.css";
import {render} from 'react-dom';
function Number(props){
  if(props.callMessage){
    props.callMessage();
  } else {
    console.log("Number " + props.children + " rendered");
  }
  return (
    <button className="num" onClick={props.onClick}>
      {props.children}
    </button>
  )
}
function sqrt(a){
  return Math.sqrt(a);
}
// String.prototype.replaceAt=function(index, replacement) {
//     return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
// }
class App extends React.Component {
  render(){
    return (
      <div>
        <h1 className="sr-only">Calculator</h1>
        <hr width="235" />
        <div className="border-999">
          <input id="expression" onKeyDown={this.handleKeySubmit}/>
          <br /><br />
          <div className="vertical-line" />
          <div className="left-pane">
            <div>
             <button className="image-js" onClick={this.handleBackspaceClick}><img src="https://cdn1.iconfinder.com/data/icons/Keyamoon-IcoMoon--limited/32/backspace.png" title="Backspace" height="14px"/></button>
              <button className="decimal" onClick={this.handleDecimalPointClick}>.</button>
            </div>
            <div>
              <button className="infinity" onClick={this.handleClickOnInfinity} title="Infinity">inf</button>
              <button className="negative" onClick={this.handleNegativeClick} title="Negative sign">&minus;</button>
            </div>
            <br />
            <div>
              <button className="e" onClick={this.handleClickOnE}>e</button>
              <button className="pi" onClick={this.handleClickOnPI}>PI</button>

            </div>
            <div>
              <button className="sqrt" onClick={this.handleSqrtClick}>&radic;</button>
            </div>
          </div>
          <div className="right-pane">
            <div>
              <button className="lodash clear" onClick={this.clear}>Clear</button>
              <button className="lodash" onClick={this.handleClickOnMod}>mod</button>
            </div>
            <div>
              <button className="lodash" onClick=
                {
                  this.handleClickOn0S
                }
              >0</button>
              <Number onClick={this.handleClickOnOpening} callMessage={function(){
                  console.log("Bracket ( rendered");
                }}>(</Number>
              <Number onClick={this.handleClickOnClosing} callMessage={function(){
                  console.log("Bracket ) rendered");
                }}>)</Number>
            </div>
            <div>
              <Number onClick={() => this.handleClickOnNumber("1")}>1</Number>
              <Number onClick={() => this.handleClickOnNumber("2")}>2</Number>
              <Number onClick={() => this.handleClickOnNumber("3")}>3</Number>
              <Number onClick={() => this.handleClickOnOperation("add")}
                callMessage= {function(){
                  console.log("Sign + rendered");
                }}>+</Number>
            </div>
            <div>
              <Number onClick={() => this.handleClickOnNumber("4")}>4</Number>
              <Number onClick={() => this.handleClickOnNumber("5")}>5</Number>
              <Number onClick={() => this.handleClickOnNumber("6")}>6</Number>
              <Number onClick={() => this.handleClickOnOperation("subtract")}
                callMessage= {function(){
                  console.log("Sign - rendered");
                }}>-</Number>
            </div>
            <div>
              <Number onClick={() => this.handleClickOnNumber("7")}>7</Number>
              <Number onClick={() => this.handleClickOnNumber("8")}>8</Number>
              <Number onClick={() => this.handleClickOnNumber("9")}>9</Number>
              <Number onClick={() => this.handleClickOnOperation("multiply")}
                callMessage= {function(){
                  console.log("Sign * rendered");
                }}>&times;</Number>
            </div>
            <div>
              <button className="equal-sign" onClick={this.handleSubmit}>=</button>
              <Number onClick={() => this.handleClickOnOperation("divide")}
                callMessage= {function(){
                  console.log("Sign / rendered");
                }}>&divide;</Number>
            </div>
          </div>
        </div>
      </div>
    )
  }
  handleNegativeClick(){
    var exp = document.getElementById("expression");
    exp.value += "-";
  }
  handleSqrtClick(){
    var exp = document.getElementById("expression");
    if (exp.value !== ""){
      exp.value = "sqrt(" + exp.value + ")";
    }
  }
  handleBackspaceClick(){
    var exp = document.getElementById("expression");
    exp.value = exp.value.slice(0, -1);
  }
  handleDecimalPointClick(){
    var exp = document.getElementById("expression");
    exp.value += ".";
  }
  clear(){
    var exp = document.getElementById("expression");
    exp.value = "";
  }
  handleClickOnMod(){
    var exp = document.getElementById("expression");
    exp.value += "%";
  }
  handleClickOn0S(){
    var exp = document.getElementById("expression");
    if (exp.value !== ""){
      exp.value += "0";
    } else {
      alert("Cannot add zero to an empty expression");
    }
  }
  handleClickOnNumber(a){
    // var number = parseInt(a, 10);
    var exp = document.getElementById("expression");
    exp.value += a;
  }
  handleClickOnE(){
    var exp = document.getElementById("expression");
    exp.value += Math.E;
  }
  handleClickOnPI(){
    var exp = document.getElementById("expression");
    exp.value += Math.PI;
  }
  handleClickOnOpening(){
    var exp = document.getElementById("expression");
    exp.value += "(";
  }
  handleClickOnClosing(){
    var exp = document.getElementById("expression");
    exp.value += ")";
  }
  handleClickOnOperation(operation){
    var exp = document.getElementById("expression");
    switch (operation){
      case "add":
        if (exp.value !== ""){
          exp.value += "+";
        };
        break;
      case "subtract":
        if (exp.value !== ""){
          exp.value += "-";
        }
        break;
      case "multiply":
        if (exp.value !== ""){
          exp.value += "*";
        };
        break;
      case "divide":
        if (exp.value !== ""){
          exp.value += "/";
        };
    }
  }
  handleClickOnInfinity(){
    var exp = document.getElementById("expression");
    exp.value += "Infinity";
  }
  handleSubmit(){
    var exp = document.getElementById("expression");
    if(exp.value !== ""){
      exp.value = eval(exp.value).toString();
    }
    else {
      alert("Please enter a expression.");
    }
  }
  handleKeySubmit(event){
    if(event.key === "Enter"){
      var exp = document.getElementById("expression");

      if(exp.value !== ""){
        exp.value = eval(exp.value).toString();
      } else {
        alert("Please enter expression");
      }
    } else {
      return;
    }
  }
}

render(<App />, document.getElementById("root"));
