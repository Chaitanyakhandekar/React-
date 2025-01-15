import React from "react";

function Button({
    text,
    className ='',
    bgColor="red-400",
    textColor = "blue-400",
    ...props
}){

    return(
        
        <button
        className={` bg-${bg-color} text-${textColor} ${className}`}
        {...props}>
            {text}
        </button>
    )
}

export default Button;