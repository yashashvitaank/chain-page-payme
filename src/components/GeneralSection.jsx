import React from 'react'
import LineChart from './LineChart'

function GeneralSection() {
  return (
    <div className='w-full flex justify-center relative'>
        <div className='w-[90%] bg-white min-h-40 shadow-md rounded-xl -translate-y-[20%]'>
          <div className='flex'>
            <div className='mt-[1.5vw] px-[2vw] border-r-[grey] border-r border-solid'>
              <div>
                <div>
                <h3>POL PRICE</h3>
                <p>$0.38 @0.000006 BTC</p>
                </div>
                <div className='mt-[1vw] pt-[0.5vw] border-t-[grey] border-t border-solid'>
                <h3>POL MARKET CAP ON POLYGON</h3>
                <p>$3,949,745,627,00(10,259,155,118POL)</p>
                </div>
              </div>
            </div>
            <div className='ml-[2vw] mt-[1.5vw] px-[2vw] border-r-[grey] border-r border-solid'>
              <div className='flex'>
                <div>
                <h3>TRANSACTIONS</h3>
                <p>4,437.12M(29.4PTS)</p>
                </div>
                <div className='ml-[6vw]'>
                <h3>MED GAS PRICE</h3>
                <p>30 Gwel ($0.01)</p>
                </div>
              </div>
              <div className='mt-[1vw] pt-[0.5vw] border-t-[grey] border-t border-solid'>
              <h3>LATEST BLOCK</h3>
              <p>61943923(2.1s)</p>
              </div>
            </div>
            <div className='ml-[5vw]'>
              <LineChart></LineChart>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GeneralSection