import React, { Children } from 'react'
import { navigationActions } from '../utils/navigation';
import NavMenu from './NavMenu';

function NavigationActions() {
  return (
    <div className='flex gap-8 text-sm font-medium text-zinc-600 h-full items-center'>
        {Children.toArray(
            navigationActions.map((nav) => <NavMenu {...nav} />)
        )}
    </div>
  )
}

export default NavigationActions