import React from 'react';
import TicketItem from './TicketItem.jsx';
import '../public/css/ticketform.css';

const TicketAccordion = ({ responsible, tickets, removeTicket, toggleCompleted }) => {
  return (
    <div className="ticket-accordion">
      <h3>{responsible}</h3>
      {tickets.map(ticket => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          removeTicket={removeTicket}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
};

export default TicketAccordion;
