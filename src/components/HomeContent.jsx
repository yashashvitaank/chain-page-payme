import { blocks } from '../data/blocks'
import { transactions } from '../data/transactions'
import SearchInput from './SearchInput'
import GeneralSection from './GeneralSection'
import TableSection from './TableSection'
import { useEffect } from 'react'

function HomeContent() {
  const getChainData = async() => {
    try {
      const res = await fetch("https://backend-connect.paymefin.tech/api/external/get-chain-data", {method: "post"}).then(res => res.json());
      console.log("response", res);
    }
    catch (err) {
      console.error(err);
    }
  }
  useEffect(()=> {
    getChainData();
  }, []);
  return (
    <div className='w-full p-2 md:px-20 pb-4'>
      <SearchInput />
    <GeneralSection/>
        <div className='w-full flex justify-center items-center gap-4 flex-col lg:flex-row'>
            <TableSection data={blocks} type="blocks" />
            <TableSection data={transactions}  type="transactions"/>
        </div>
    </div>
  )
}

export default HomeContent