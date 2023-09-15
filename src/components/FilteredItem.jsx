import React, { useContext } from 'react'
import remove from '/images/icon-remove.svg'
import { FilterContext } from '../App'

const filteredItems = ({item}) => {
    const {filterArray,setFilterArray} = useContext(FilterContext)
    const handleRemove= ()=>{
        setFilterArray(filterArray.filter((filterItem)=>filterItem !== item))
    }

  return (
    <>    
    <span className='text-primary bg-background py-1 px-2 rounded-l-md text-xs'>{item}</span>
    <span onClick={handleRemove} className='bg-primary p-2 mr-4 active:bg-dark cursor-pointer'><img src={remove} width={8} className='brightness-200 ' alt="remove" /></span>
    </>
  )
}

export default filteredItems