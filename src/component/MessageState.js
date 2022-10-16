import React, {Component} from "react";


class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"I am coming"
        }
    }
    changeMesssage(){
        this.setState({
            message: "you are iwarmly welcome in the Lord"
        })
        
    }
    render(){
        return(
            <div>
                <h4>{this.state.message}</h4>
                <button onClick={()=>this.changeMesssage()}>Change Text</button>
            </div>
        )
    }
}
export default Message