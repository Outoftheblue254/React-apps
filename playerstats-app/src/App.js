import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react';
import PlayerCard from './components/playercard';

function App() {
  
  // Initial players array
  const initialPlayers = [
    { 
      name: "Liam Chastain",
      goals: 2,
      assists: 3,
      points: 5,
      position: "Defense",
    },
    { 
      name: "Quaid Daigle",
      goals: 1,
      assists: 2,
      points: 3,
      position: "Forward",
    },
    { 
      name: "Parker Roberts",
      goals: 4,
      assists: 1,
      points: 5,
      position: "Forward",
    },
  ];

  // State for players
  const [players, setPlayers] = useState(initialPlayers);

  
       
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hockey Player App</h1>
        <h2>Player Stats App</h2>
        <h3>Welcome to the Player Stats App</h3>
        <h4>Player Stats</h4>
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            position={player.position}
            goals={player.goals}
            assists={player.assists}
            points={player.points}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
