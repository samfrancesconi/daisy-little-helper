const CalendarRepository = require('./repositories/GcalendarRepository.js');
const DiscordBot = require('./services/DiscordBot.js');
const EventsFilter = require('./utils/EventsFilter.js');
const Message = require('./models/Message.js');
require('dotenv').config();


const bot = new DiscordBot();
const calendar = new CalendarRepository('./service-account.json');
const filter = new EventsFilter();
const messageService = new Message();


bot.client.on("messageCreate", async (message) => {
    if(message.content == '!daisy') {
        console.log(calendar.getEvents());

        let events = await calendar.getEvents();

        if(!events)
            return message.author.send('Ops.... qualcosa è andato storto'); 

        //filters only the incoming events events
        events = filter.getIncomingEvents(events);
       
        if(events.length) {
            //using this for my dog's appointments
            return events.map(event => 
                message.author.send(messageService.createDaisyMessage(event)));
        };

        return message.author.send('Non ci sono eventi programmati in futuro'); 
    }; 
});


