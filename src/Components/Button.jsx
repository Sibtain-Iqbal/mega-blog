import React from 'react'

function Button(
    {
        children,
        type = 'button',
        bgColor = 'bg-blue-600px',
        textColor = 'text-white',
        className = '',
        ...props


}) {
  return (
   <button className={`px-2 py-5 ${className} ${type} ${textColor} ${bgColor}`} {...props}>{children}</button>
  )
}

export default Button