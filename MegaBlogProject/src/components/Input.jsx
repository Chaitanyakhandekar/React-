import React, { forwardRef, useId } from "react";

const Input = forwardRef( function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref){

    const id = useId();

    return(
        
        <div className="w-full">
        { label && <label
            htmlFor={id}>
            {label}
            </label>}

            <input type={type} 
            className={` ${className}`}
            id={id}
            ref={ref}
            {...props}/>
    </div>
    )
})

export default Input;