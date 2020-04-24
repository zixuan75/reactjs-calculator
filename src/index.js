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

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

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
            </div>
            <br />
            <div>
              <button className="e" onClick={this.handleClickOnE}>e</button>
              <button className="pi" onClick={this.handleClickOnPI}>PI</button>
              <button className="plusminus" onClick={this.plusOrMinus}><sup>+</sup>/<sub>-</sub></button>
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
              <Number onClick={this.handleClickOn1}>1</Number>
              <Number onClick={this.handleClickOn2}>2</Number>
              <Number onClick={this.handleClickOn3}>3</Number>
              <Number onClick={() => this.handleClickOnOperation("add")}
                callMessage= {function(){
                  console.log("Sign + rendered");
                }}>+</Number>
            </div>
            <div>
              <Number onClick={this.handleClickOn4}>4</Number>
              <Number onClick={this.handleClickOn5}>5</Number>
              <Number onClick={this.handleClickOn6}>6</Number>
              <Number onClick={() => this.handleClickOnOperation("subtract")}
                callMessage= {function(){
                  console.log("Sign - rendered");
                }}>-</Number>
            </div>
            <div>
              <Number onClick={this.handleClickOn7}>7</Number>
              <Number onClick={this.handleClickOn8}>8</Number>
              <Number onClick={this.handleClickOn9}>9</Number>
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
      return;
    }
  }
  handleClickOn1(){
    var exp = document.getElementById("expression");
    exp.value += "1";
  }
  handleClickOn2(){
    var exp = document.getElementById("expression");
    exp.value += "2";
  }
  handleClickOn3(){
    var exp = document.getElementById("expression");
    exp.value += "3";
  }
  handleClickOn4(){
    var exp = document.getElementById("expression");
    exp.value += "4";
  }
  handleClickOn5(){
    var exp = document.getElementById("expression");
    exp.value += "5";
  }
  handleClickOn6(){
    var exp = document.getElementById("expression");
    exp.value += "6";
  }
  handleClickOn7(){
    var exp = document.getElementById("expression");
    exp.value += "7";
  }
  handleClickOn8(){
    var exp = document.getElementById("expression");
    exp.value += "8";
  }
  handleClickOn9(){
    var exp = document.getElementById("expression");
    exp.value += "9";
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
        exp.value += "-";
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
