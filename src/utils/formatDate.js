import moment from 'moment';

function formatDate(date, pattern = 'DD-MM-YYYY hh:mm:ss a') {
   const dateFormat = moment(date).utc().format(pattern);
   console.log('Date format', dateFormat);
   return dateFormat.toUpperCase();
}

export default formatDate;
