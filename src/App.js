import React from "react";
import "./style.css";
 
class App extends React.Component{
  constructor(){
    super();
    this.num1=React.createRef();
    this.num2=React.createRef();
  }
  add=()=>{
    var num1= +this.num1.current.value;
    var num2= +this.num2.current.value;
    var result = num1 + num2;
    document.getElementById('d3').innerHTML=result;
  }
  render(){
    return(
      <div>
        <h3>Addition(uncontrolled components with Ref)</h3>
        NUM-1:<input type="text" ref={this.num1}/><hr/>
        NUM-2:<input type="text" ref={this.num2}/><hr/>
        <button onClick={this.add}>Add</button>
        &nbsp;
         Result&nbsp;:&nbsp; <span id='d3'></span>
      </div>
    )
  }

}
export default App;