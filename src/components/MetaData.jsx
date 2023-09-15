import React from 'react'

const MetaData = ({postedAt,contract,location}) => {
  return (
    <>
        <span className='pr-3 ' >{postedAt}</span>
        <span className='font-bold pr-3'>.</span>
        <span className='pr-3 ' >{contract}</span>
        <span className='font-bold pr-3'>.</span>
        <span className='pr-3 ' >{location}</span>
    </>
  )
}

export default MetaData