import header from '/images/bg-header-desktop.svg'
import mobile_header from '/images/bg-header-mobile.svg'
import Tablet from './components/Tablet'
import data from '../utils/data.json'
import { createContext,useEffect, useState } from 'react'
import FilterBar from './components/FilterBar'

export const FilterContext = createContext()

function App() {

  const [filterArray, setFilterArray] = useState([])


  return (
    <>
      <main className='flex flex-col h-full max-[740px]:w-[100vw]  '>
        <header className='bg-primary  h-[18%] flex mb-6'>
        <img src={header}  alt="header" className='max-[850px]:hidden w-full' />
        <img src={mobile_header}  alt="header" className='min-[850px]:hidden w-full h-[270px]' />

        </header>
        <FilterContext.Provider value={{filterArray,setFilterArray}}>
        <div className=' flex items-center justify-center mx-auto mt-10 flex-col gap-5 [&>*:last-child]:mb-12 max-[830px]:gap-12 relative'>
        <FilterBar/>

        {filterArray.length>0? (
          data.filter((item)=>(
              filterArray.every((filterItem)=>(
                [item.role,item.level,...item.languages,...item.tools].includes(filterItem)
              ))
            ))
            .map((item)=>(
            <Tablet data={item}  key={item.id}/>
          ))
        ):(
         data.map((item)=>(
          <Tablet data={item}  key={item.id}/>
        )) 
        )}

        </div>
        </FilterContext.Provider>
      </main>
      
    </>
  )
}

export default App
