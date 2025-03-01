const dayjs = require('dayjs');

class Message {
    createDaisyMessage(event) {
        let date = event.start.date ? event.start.date : event.start.dateTime;
        return dayjs(date).format('DD-MM-YYYY HH:mm:ss') + ' abbiamo appuntamento per ' + event.summary;
    };
};

module.exports = Message;
