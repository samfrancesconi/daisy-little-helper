const Calendar = require('./services/Calendar.js');

const calendar = new Calendar('./service-account.json');

calendar.getEvents().then((events) => {
    console.log(events);
}).catch((error) => {
    console.error('Error fetching events:', error);
});

