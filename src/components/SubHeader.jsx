import React from 'react'

const SubHeader = ({context, background}) => {
  return (
    <div className='w-[300px] mb-1' >
        <span className= {`${background} px-2 py-1 text-xs uppercase
     text-center text-white font-bold rounded-full`}>{context}</span>
        </div>
  )
}

export default SubHeader