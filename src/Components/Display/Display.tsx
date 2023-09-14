import React from 'react';

type Props = {
  counter: number
  displayCounter: string
}

const Display: React.FC<Props> = ({ counter, displayCounter }) => {
  return (
    <div>
      <h2>{counter}</h2>
      <p>{displayCounter}</p>
    </div>
  );
};

export default Display;