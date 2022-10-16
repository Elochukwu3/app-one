import React from 'react'
// const Greet = () => <h2> hello world I am Elochukwu Romauld, Cava </h2>
// you can also use export const  Greet = () => <h2> hello world I am Elochukwu Romauld </h2>
//  export const  Greet = () => <h2> hello world I am Elochukwu Romauld </h2>
// export default Greet
// props
const Greet = (props)=>{
    return(
        <div>
            <h2>{props.name}</h2>
            <h4>{props.children}</h4>
        </div>
    )
}
export default Greet