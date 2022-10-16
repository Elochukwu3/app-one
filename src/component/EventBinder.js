import React, {Component} from "react";

class EventBinder extends Component{
    constructor(){
        super()
        this.state = {
            message: "I am coming to you"
        }
        // this.bindHandler = this.bindHandler.bind(this)binding in the class constructor
    }
//  bindHandler=()=>{
//     this.setState({
//       message: "Ok Be fast"  
//     })
//  } using arrow function in the class property
bindHandler(){
    this.setState({
        message: "Ok try to come quick"
    })
}
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                {/* <button onClick= {this.bindHandler.bind(this)}>Click</button> bind method */}
                {/* <button onClick= {()=>this.bindHandler()}>Click</button> use of arrow function in render */}
                <button onClick= {this.bindHandler.bind(this)}>Click</button>
            </div>
        )
    }
}
export default EventBinder