const dayjs = require('dayjs');
var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);

class EventsFilter {
    getIncomingEvents(allEvents) {
        return allEvents.filter(event => {
            if(dayjs().isSameOrBefore(event.start.dateTime, 'day') && dayjs().isSame(event.start.dateTime, 'month'))
                return event;
        }); 
    };
};

module.exports = EventsFilter;