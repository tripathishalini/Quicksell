import React from 'react';

function TicketCard({ ticket }) {
  return (
    <div className="TicketCard">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Assigned To: {ticket.assigned_to}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
}

export default TicketCard;
