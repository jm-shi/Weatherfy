var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
            'August', 'September', 'October', 'November', 'December'];

function formatDate(timestamp) {
    var date = new Date(timestamp*1000);

    var year = date.getFullYear();
    var month = months[date.getMonth()];
    var day = date.getDate().toString();
    var formattedDate = month + ' ' + day + ', ' + year;

    var hours = date.getHours();
    var meridiem = hours < 12 ? 'am' : 'pm';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var formattedTime = hours + ':' + minutes + ' ' + meridiem;

    var dateObj = {
        date: formattedDate,
        time: formattedTime
    }

    return dateObj;
}

module.exports = {
    formatDate: formatDate
}