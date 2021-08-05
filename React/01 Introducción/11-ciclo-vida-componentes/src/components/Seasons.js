import React from 'react';

const Seasons = () => {
    let seasons = ["Spring","Summer", "Autum", "Winter"];
    return(
        <>
        <h2>Component Seasons</h2>
          <ul>
            {
              seasons.map((season, index) => (
                <li key={index}>{season}</li>
              ))
            }
          </ul>
        </>
    );
}

export default Seasons;