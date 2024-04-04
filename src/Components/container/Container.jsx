import React, { Children } from 'react'

function Container({children}) {
  
    return <div className='w-full p-4 mx-auto max-w-7xl'>{children}</div>
  
}

export default Container