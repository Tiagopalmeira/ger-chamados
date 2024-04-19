import React, { useState } from 'react';
import TicketAccordion from './TicketAccordion.jsx';
import TicketForm from './TicketForm.jsx';

import '../public/css/App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);

  const addTicket = ticket => {
    const newTicket = { id: Date.now(), ...ticket, completed: false };
    setTickets([...tickets, newTicket]);
  };

  const removeTicket = id => {
    setTickets(tickets.filter(ticket => ticket.id !== id));
  };

  const toggleCompleted = id => {
    setTickets(tickets.map(ticket =>
      ticket.id === id ? { ...ticket, completed: !ticket.completed } : ticket
    ));
  };

  return (
    <div className="app-container">
      <div className="titulo">
        <h1>Gerenciador de Chamados</h1>
      </div>
      <div className="form-container">
        <TicketForm addTicket={addTicket} />
      </div>
      <div className="ticket-container">
        {tickets.map(ticket => (
          <TicketAccordion
            key={ticket.id}
            responsible={ticket.responsavel}
            tickets={[ticket]}
            removeTicket={removeTicket}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
