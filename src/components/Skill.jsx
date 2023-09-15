import React, { useContext } from 'react'
import { FilterContext } from '../App'

const Skill = ({context, filterWord}) => {

  const {filterArray , setFilterArray} = useContext(FilterContext)

  const handleFilter = (e)=>{
    if(!filterArray.includes(e.target.dataset.name))
    setFilterArray((prev)=>[...prev , e.target.dataset.name])
  }

  return (
        <span 
        data-name={filterWord} onClick={handleFilter}
        className='mr-4 bg-tablet text-primary py-1
         px-3 font-bold text-xs rounded-md cursor-pointer
         active:bg-primary active:text-white
         '>{context}</span>
  )
}

export default Skill