const Calendar = require('./services/Calendar.js');
const DiscordBot = require('./services/DiscordBot.js');
const dayjs = require('dayjs');


const calendar = new Calendar('./service-account.json');
const bot = new DiscordBot();

bot.client.on("messageCreate", async (message) => {
    if(message.content == '!daisy') {
        console.log(calendar.getEvents());

        const events = await calendar.getEvents();
       
        if(events) {
            //using this for my dog's appointments
            return events.map(event => message.author.send(dayjs(event.start.dateTime).format('DD-MM-YYYY HH:mm:ss') + ' abbiamo appuntamento per ' + event.summary));
        };

        return message.author.send('Ops.... qualcosa è andato storto'); 
    }; 
});


