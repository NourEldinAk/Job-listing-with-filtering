import React, { useContext } from 'react'
import { FilterContext } from '../App'
import FilteredItem from './FilteredItem'
const FilterBar = () => {
    const {filterArray,setFilterArray} = useContext(FilterContext)

    const handleReset = ()=>{
        setFilterArray([])
    }

  return (
    <>    { filterArray.length>0 && (
            <div
            className='absolute bg-white h-[60px] max-[830px]:h-[120px] rounded-md filter-bar-position tablet-width drop-shadow-md z-40'
            >
                <div className="flex w-full h-full items-center ml-10 font-bold">
                    <div className='flex items-center w-4/5 flex-wrap h-full max-[830px]:w-[66%]'>
                        {filterArray.map(item=><FilteredItem item={item} key={item}/>)}
                    </div>
        
                    <span 
                    onClick={handleReset}
                    className='text-sm text-darkGrayish active:text-primary active:underline  cursor-pointer w-1/5'>Clear</span>
        
        
                </div>
                
            </div>
        )
    }
</>

  )
}

export default FilterBar