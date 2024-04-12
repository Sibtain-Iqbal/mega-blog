import React, { forwardRef, useId } from 'react'

const Select = forwardRef(function ({
  options,
  label,
  className = "",
  ...props
}, ref) {

  const id = useId()
  return <div className='w-full'>

    {
      label &&
      <label htmlFor={id} className=''  ></label>
    }

    <select
      id={id}

      {...props}

      ref={ref}

      className={`px-3 py-3 focus:bg-gray-100 duration-150 border border:bg-gray bg-white outline-none text-black w-full ${className}`}>

      {
        options?.map((option) => (
          <option
            key={option}
            value={option}
            ref={ref}

          >
            {option}

          </option>
        ))
      }


    </select>

  </div>
})

export default Select