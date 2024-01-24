module.exports = (dateString) => {
    const date = new Date(dateString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = '';
  
    if (hours >= 12) {
        period = 'PM';
        hours -= 12;
    } period = 'AM';

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');

    return `${hours}:${minutes} ${period}`;
}