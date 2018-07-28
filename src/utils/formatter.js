const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
            'August', 'September', 'October', 'November', 'December'];

function formatDate(timestamp) {
    const date = new Date(timestamp*1000);

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate().toString();
    const formattedDate = month + ' ' + day + ', ' + year;

    return formattedDate;
}

function formatShortDate(timestamp) {
    const date = new Date(timestamp*1000);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate().toString();
    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
}

function formatTime(timestamp) {
    const date = new Date(timestamp*1000);

    let hours = date.getHours();
    const meridiem = hours < 12 ? 'am' : 'pm';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const formattedTime = `${hours}:${minutes} ${meridiem}`;

    return formattedTime;
}

function formatShortTime(timestamp) {
    const date = new Date(timestamp*1000);

    let hours = date.getHours();
    const meridiem = hours < 12 ? 'am' : 'pm';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const formattedTime = `${hours}${meridiem}`;

    return formattedTime;
}

function toCelsius(fahrenheit) {
    return Math.round((fahrenheit-32)*5/9);
}

module.exports = {
    formatDate,
    formatShortDate,
    formatTime,
    formatShortTime,
    toCelsius
}