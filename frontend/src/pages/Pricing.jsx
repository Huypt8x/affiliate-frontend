import React from 'react'
export default function Pricing(){
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Pricing</h2>
      <div className='grid grid-cols-3 gap-6'>
        <div className='p-6 border rounded'>Free<br/><div className='text-3xl font-bold'>$0</div></div>
        <div className='p-6 border rounded'>Pro<br/><div className='text-3xl font-bold'>$29</div></div>
        <div className='p-6 border rounded'>Enterprise<br/><div className='text-3xl font-bold'>Contact</div></div>
      </div>
    </div>
  )
}
