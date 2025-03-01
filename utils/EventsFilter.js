const dayjs = require('dayjs');
var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);

class EventsFilter {
    getIncomingEvents(allEvents) {
        return allEvents.filter(event => {
            let date = event.start.date ? event.start.date : event.start.dateTime;
            if(date && dayjs().isSameOrBefore(date, 'day') && dayjs().isSame(date, 'month'))
                return event;
        }); 
    };
};

module.exports = EventsFilter;