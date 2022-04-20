import { useState, useEffect } from "react";

const AddZero = (name) => (name < 10 ? `0${name}` : name);

const Countdown = ({
  initialMinute = new Date().getMinutes(),
  initialSeconds = new Date().getSeconds(),
  initialHour = new Date().getHours(),
}) => {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [hours, setHours] = useState(initialHour);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(myInterval);
          } else {
            setHours(hours - 1);
            setMinutes(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <h1>
          {AddZero(hours)}:{AddZero(minutes)}:{AddZero(seconds)}
        </h1>
      )}
    </div>
  );
};

export default Countdown;
