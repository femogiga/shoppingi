import moment from 'moment';

export const dateFormat = (format, date) => {
  const format1 = 'MMMM YYYY';
  const format2 = 'DD.MM.YYYY';
  const format3 = 'ddd DD.MM.YYYY';
  const dateToformat = new Date(date);
  switch (format) {
    case 'dmy':
      format = format1;
      break;
    case 'ddmy':
      format = format3;
      break;
    default:
      format = format2;
      break;
  }
  const formattedDate = moment(dateToformat).format(format);
  return formattedDate;
};

//console.log(dateFormat('dmy1', '2023-01-14T11:53:50.626Z'));
