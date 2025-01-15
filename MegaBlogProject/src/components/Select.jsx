import React from "react";
import { useId,forwardRef } from "react";


function Select({
    options,
    label,
    className='',
    ...props
},ref){

    const id = useId();

    return (
        <div>
            <select 
            id={id}
            ref={ref}
            {...props}
            className={` ${className}`}>

                {
                    options ?.map((option)=>(
                        <option 
                        value={option}
                        key={option}>
                            {option}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default forwardRef(Select);