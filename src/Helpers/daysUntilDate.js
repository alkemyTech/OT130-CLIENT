export const daysToDate = (dueDate) => {
  const DATE_FORMAT = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
  const dateElements = dueDate.split('-');
  const year = dateElements[0];
  const month = dateElements[1] - 1;
  const day = dateElements[2];

  if (!DATE_FORMAT.test(dueDate))  {
    throw Error('Invalid date. Format is "yyyy-mm-dd".');
  }

  const due = new Date(year, month, day);
  const milisecondsToDue = due.getTime() - new Date();
  const days = milisecondsToDue / 1000 / 60 / 60 / 24;

  return Math.floor(days).toString();
};
