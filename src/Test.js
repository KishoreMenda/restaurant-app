import React from "react";

const Test = (props) => {
    return(
        <div>
            <center>
                <h2> Name : {props.name} and Age is {props.age}</h2>
            </center>
        </div>
    )
}

export default Test;