import React, { Children } from 'react'
import LineChart from './LineChart'
import { comma } from 'postcss/lib/list'

function GeneralSection() {
  const generalSection = [
    {
      label: "Column 1",
      content: "Column 1"
    },
    {
      label: "Column 2",
      content: "Column 2"
    },
    {
      label: "Column 3",
      content: "Column 3"
    },
    {
      label: "Column 4",
      content: "Column 4"
    },
  ]
  function Column ({label, content}){
    return (
      
        <div className='border-b border-zinc-200  md:border-l p-4'>
          <p className='text-base'>{label}</p>
          <p className='text-lg font-semibold'>{content}</p>
        </div>

    )
  }
  return (
    <div className='w-full bg-white rounded-xl mb-4 flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 my-4'>
      {Children.toArray(
        generalSection.map((columnText) => <Column {...columnText} />)
      )}
    </div>
  )
}

export default GeneralSection