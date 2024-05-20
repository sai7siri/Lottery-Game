import React from 'react';
import TicketNum from './TicketNum';


function Ticket({ticket}) {
  return (
    <div style={{border:"1px solid gray",
      borderRadius:"18px", marginBottom:"15px"
    }}>
      {
         ticket.map((num , idx)=>(
            <TicketNum nums = {num} key={idx} />
         ))
      }
      
    </div>
  )
}

export default Ticket