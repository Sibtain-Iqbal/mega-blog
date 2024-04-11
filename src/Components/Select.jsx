import { useId ,forwardRef} from "react"
import React from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {

    const id = useId()
  return (
    <div className='w-full'>

        {label && <label htmlFor="id" className="" ></label>}

        <select

        {...props}
        className={`px-2 py-3 duration-200 focus:bg-gray-200 bg-white outline-none border border-gray-200 w-full text-black`}
        ref={ref}
        id={id}
        
        >
            {options?.map((option)=>

            (<option value={option} key={option}>{option}</option>)

            )}

        </select>

    </div>
  )
}

export default React.forwardRef(Select)