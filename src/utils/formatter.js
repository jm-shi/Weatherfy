var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
            'August', 'September', 'October', 'November', 'December'];

function formatDate(timestamp) {
    var date = new Date(timestamp*1000);

    var year = date.getFullYear();
    var month = months[date.getMonth()];
    var day = date.getDate().toString();
    var formattedDate = month + ' ' + day + ', ' + year;

    return formattedDate;
}

function formatTime(timestamp) {
    var date = new Date(timestamp*1000);

    var hours = date.getHours();
    var meridiem = hours < 12 ? 'am' : 'pm';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var formattedTime = hours + ':' + minutes + ' ' + meridiem;

    return formattedTime;
}

function toCelsius(fahrenheit) {
    return Math.round((fahrenheit-32)*5/9);
}

module.exports = {
    formatDate: formatDate,
    formatTime: formatTime,
    toCelsius: toCelsius
}