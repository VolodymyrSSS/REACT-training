import React, { useState } from 'react';
import Button from '../Button';

export default function RickRoll() {
    const [rickRolls, setRickRolls] = useState([]);

    function rick() {
        // generate new rick
        const url = "https://media.tenor.com/q0Ejci9EQhcAAAAi/rick-astley-rick-roll.gif";
        setRickRolls([
            ...rickRolls, 
            url,
        ]);
    }

  return (
    <div>
        <Button onClick={rick}>Rickroll</Button>

        <section>
            {rickRolls.map((url, index) => (
                <img key={index} src={url} alt="you just got rick rolled"/>
            ))}

        </section>
    </div>
  )
}
