import React, { useState, useEffect } from 'react';
import './App.css';
import TicketBoard from './TicketBoard';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status'); // Default grouping by status
  const [sortBy, setSortBy] = useState('title'); // Default sorting by title

  useEffect(() => {
    // Fetch data from the provided API
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Kanban Board</h1>
        <div>
          <button onClick={() => setGroupBy('status')}>Group by Status</button>
          <button onClick={() => setGroupBy('user')}>Group by User</button>
          <button onClick={() => setGroupBy('priority')}>Group by Priority</button>
          <button onClick={() => setSortBy('priority')}>Sort by Priority</button>
          <button onClick={() => setSortBy('title')}>Sort by Title</button>
        </div>
      </header>
      <TicketBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
}

export default App;
