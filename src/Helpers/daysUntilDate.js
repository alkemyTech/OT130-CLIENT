export const daysToDate = (dueDate) => {
  const dateElements = dueDate.split('-');
  const year = dateElements[0];
  const month = dateElements[1] - 1;
  const day = dateElements[2];

  if (month > 12 || day > 31 || year.length < 4 || !dueDate.includes('-') || dueDate.includes('/'))  {
    throw Error('Invalid date. Format is "yyyy-mm-dd".');
  }

  const due = new Date(year, month, day);
  const milisecondsToDue = due.getTime() - new Date();
  const days = milisecondsToDue / 1000 / 60 / 60 / 24;

  return Math.floor(days).toString();
};
