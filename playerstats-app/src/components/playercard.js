

function PlayerCard(props) {   
return(   
  <div className="card-container">
    <div className="player-card">
      <h2>{props.name}</h2>
      <p>Position: {props.position}</p>
      <p>Goals: {props.goals}</p>
      <p>Assists: {props.assists}</p>
      <p>Points: {props.points}</p>
      </div>
    </div>
  );
}

export default PlayerCard;
// This is a functional component that takes in props and displays player information. */