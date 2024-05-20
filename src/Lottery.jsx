import React, { useState } from 'react';
import {getNums , sum} from "./helper.js";
import Ticket from './Ticket.jsx';
import TicketNum from './TicketNum.jsx';

function Lottery({n , winCond}) {
   const [ticket, setTicket] = useState(getNums(n));

  let isWinning = winCond(ticket);

  const buyTicket=()=>{
    setTicket(getNums(n));
  }

  return (
    <div className='main-box'>
      <h1>Lottery Game</h1>

      <Ticket ticket={ticket}/> 
      
    <button onClick={buyTicket}>Buy a Ticket</button>
      <h3  style={{color:"green"}}>{isWinning && "congratulations, you won!"}</h3>

    </div>
  )
}

export default Lottery;