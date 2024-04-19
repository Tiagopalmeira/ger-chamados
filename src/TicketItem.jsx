import React from 'react';
import '../public/css/ticket.css'; // Certifique-se de que o caminho está correto

const TicketItem = ({ ticket, removeTicket, toggleCompleted }) => {
  const handleRemove = () => {
    removeTicket(ticket.id);
  };

  const handleToggleCompleted = () => {
    toggleCompleted(ticket.id);
  };

  return (
    <div className="ticket"> {/* Certifique-se de que a classe está correta */}
      <h4>{ticket.issue}</h4>
      <p>Local: {ticket.location}</p>
      <p>Data: {ticket.date}</p>
      <p>Autor: {ticket.author}</p>
      <button onClick={handleRemove}>Excluir</button>
    </div>
  );
};

export default TicketItem;
