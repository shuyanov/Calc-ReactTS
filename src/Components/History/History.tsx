import React, { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

export const History: React.FC = () => {
  const numberContext = useContext(NumberContext);

  return (
    <div>
      <h2>History</h2>

      {numberContext?.history && numberContext?.history.length > 0 ? (
        <>
          <ul>
            {numberContext?.history.map((history, index) => (
              <div key={index}>{history}</div>
            ))}
          </ul>
        </>
      ) : (
        <>No history available</>
      )}
    </div>
  );
};
