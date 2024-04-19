import React, { useState } from 'react';
import '../public/css/ticketform.css';

const TicketForm = ({ addTicket }) => {
  const [location, setLocation] = useState('');
  const [issue, setIssue] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [responsavel, setResponsavel] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!location.trim() || !issue.trim() || !date.trim() || !author.trim() || !responsavel.trim()) return;
    addTicket({ location, issue, date, author, responsavel });
    setLocation('');
    setIssue('');
    setDate('');
    setAuthor('');
    setResponsavel('');
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Local:</label>
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="Local"
        />
      </div>
      <div className="form-group">
        <label>Problema:</label>
        <input
          type="text"
          value={issue}
          onChange={e => setIssue(e.target.value)}
          placeholder="Problema"
        />
      </div>
      <div className="form-group">
        <label>Data:</label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          placeholder="Data"
        />
      </div>
      <div className="form-group">
        <label>Cliente:</label>
        <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Cliente:"
        />
      </div>
      <div className="form-group">
        <label>Técnico responsavel</label>
        <select value={responsavel} onChange={e => setResponsavel(e.target.value)}>
          <option value="">Técnicos:</option>
          <option value="Tiago">Tiago</option>
          <option value="Ana">Ana</option>
          <option value="Pedro">Pedro</option>
        </select>
      </div>
      <button className="submit-btn" type="submit">Adicionar Chamado</button>
    </form>
  );
};

export default TicketForm;
