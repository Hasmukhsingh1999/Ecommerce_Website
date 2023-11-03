import React from 'react'
import Left from './Left'

import Right from './Right'

const Navbar = () => {
  return (
    <div className={`h-[60px] w-full flex items-center  justify-center cursor-pointer `}>
         <div
        className={`flex w-full justify-between  px-[4vw] items-center`}
      >
        <Left/>
      
        <Right/>
      </div>
    </div>
  )
}

export default Navbar