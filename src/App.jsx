
import React from 'react'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import { sum } from './helper'
const App = () => {

  function winCond(arr){
    return sum(arr) === 14;
  }
  return (
    <div>
   
      <Lottery n={3} winCond={winCond}/>
      
    </div>
  )
}

export default App