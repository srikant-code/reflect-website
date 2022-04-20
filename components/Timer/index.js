import { useState, useEffect } from "react";

const AddZero = (name) => (name < 10 ? `0${name}` : name);

const Timer = ({ UI = <div></div> }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      const now = new Date();
      setHours(now.getHours());
      setMinutes(now.getMinutes());
      setSeconds(now.getSeconds());
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {!UI ? (
        <h1>
          {AddZero(hours)}:{AddZero(minutes)}:{AddZero(seconds)}
        </h1>
      ) : (
        <UI
          hours={AddZero(hours)}
          minutes={AddZero(minutes)}
          seconds={AddZero(seconds)}
        />
      )}
    </div>
  );
};

export default Timer;
