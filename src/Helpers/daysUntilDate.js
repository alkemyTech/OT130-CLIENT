const differenceBetweenDates = (dueDate) => {
  const DATE_FORMAT = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  if (!DATE_FORMAT.test(dueDate)) {
    throw Error('Invalid date. Format is "yyyy-mm-dd".');
  }

  const dateElements = dueDate.split('-');
  const dueYear = dateElements[0];
  const dueMonth = dateElements[1] - 1;
  const dueDay = dateElements[2];
  const dueTime = new Date(dueYear, dueMonth, dueDay);
  const totalMilisecondsRemaining = dueTime.getTime() - new Date();
  
  return totalMilisecondsRemaining;
};

export const daysToDue = (dueDate) => {
  const totalSecondsRemaining = differenceBetweenDates(dueDate) /1000;
  const daysRemaining = Math.floor(totalSecondsRemaining / 60 / 60 / 24);

  return daysRemaining.toString();
};

export const countDown = (dueDate) => {
  const totalSecondsRemaining = differenceBetweenDates(dueDate) / 1000;
  const daysRemaining = daysToDue(dueDate);
  const hoursRemaining = Math.floor((totalSecondsRemaining % (60 * 60 * 24)) / (60 * 60));
  const minutesRemaining = Math.floor((totalSecondsRemaining % (60 * 60)) / 60);

  return `${daysRemaining}d ${hoursRemaining}h ${minutesRemaining}m`;
};

export const calculateTimeLeft = (endDate) => {
  
  const difference = differenceBetweenDates(endDate)

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      h: Math.floor((difference / (1000 * 60 * 60)) % 24),
      m: Math.floor((difference / 1000 / 60) % 60),
      s: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft
}