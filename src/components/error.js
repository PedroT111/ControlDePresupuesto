import React from "react";



const Error = ({mensaje}) => {


    return(
        <div className ="alert alert-danger ">
            <p>{mensaje}</p>
        </div>
    )
}

export default Error;