import React from 'react'
import SubHeader from './SubHeader'
import MetaData from './MetaData'
import Skill from './Skill'

const tablet = ({data}) => {


  return (
    <div className={`${data.featured && 'border-l-4 border-primary'} tablet-container`}>
      <div className='w-[200px] '>
      <img src={data.logo} className='object-contain w-full h-full img'  alt="logo" />

      </div>
      <div className='flex flex-col justify-center w-[600px] h-full max-[830px]:gap-2'>
        <div className="flex w-[160px] gap-3 items-center ">
        <h1 className='text-primary font-bold text-sm'>{data.company}</h1>
        {data.new&& <SubHeader context='New!' background='bg-primary'/>}
        {data.featured && <SubHeader context='Featured' background='bg-dark'/>}
        
        </div>
        <div>
          <p className='text-dark font-bold hover:text-primary cursor-pointer'>{data.position}</p>
        </div>
        <div className='flex text-sm text-darkGrayish w-full '>
          <div className=''>
            <MetaData postedAt={data.postedAt} contract={data.contract} location={data.location} />
          </div>
        </div>
      </div>
        <div className=' text-end mt-7 w-full max-[830px]:tablet-skill-mobile z-30'>

          <Skill context={data.role}  filterWord={data.role}  />
          <Skill context={data.level} filterWord={data.level}  />
          {data.tools.map((tool)=>(
          <Skill context={tool} filterWord={tool}  />
          ))}
          {data.languages.map((lang)=>(
            <Skill context={lang} key={lang}  filterWord={lang}  />
          ))}

        </div>
      </div>
  )
}

export default tablet