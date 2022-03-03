import React, { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../../Helpers/daysUntilDate';

const Countdown = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {

    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      `${timeLeft[interval]}${interval} `,
    );
  });

  return timerComponents.length ? timerComponents : <span>La campaña ha finalizado</span>;
};

export default Countdown;
