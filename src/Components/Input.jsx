import React, { forwardRef ,useId} from 'react'

const Input = forwardRef(function input({
    type = "text",
    label,
    className = '',
    ...props
},ref) 



{
    const id = useId()
    return (
     

        <div>
            {label&& <label
           
            
            htmlFor = {id}
            className={`${className}`}
            {...props}  > { label} </label>}

            <input
            type={type}
            className={` px-3 py-2 rounded-lg bg-white-300 text-black outline-none focus:bg-gray-300 border duration-200 border-gray w-full ${className}`}
            ref={ref}
            {...props}
            id = {id}
            />

        </div>

    
    )
})

export default Input