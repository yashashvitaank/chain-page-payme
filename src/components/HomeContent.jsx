import { blocks } from '../data/blocks'
import { transactions } from '../data/transactions'
import SearchInput from './SearchInput'
import GeneralSection from './GeneralSection'
import TableSection from './TableSection'

function HomeContent() {
  return (
    <div className='w-full px-20 pb-4'><SearchInput />
    <GeneralSection/>
        <div className='w-full flex justify-center items-center gap-4 flex-col lg:flex-row'>
            <TableSection data={blocks} type="blocks" />
            <TableSection data={transactions}  type="transactions"/>
        </div>
    </div>
  )
}

export default HomeContent