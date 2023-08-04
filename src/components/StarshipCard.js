import React from "react";

function StarshipCard({ starship }) {
  return (
    <div className="card">
      <h1>{starship.name}</h1>
    </div>
  );
}

export default StarshipCard;
