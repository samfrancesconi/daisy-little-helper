const dayjs = require('dayjs');

class Message {
    createDaisyMessage(event) {
        return dayjs(event.start.dateTime).format('DD-MM-YYYY HH:mm:ss') + ' abbiamo appuntamento per ' + event.summary;
    };
};

module.exports = Message;
