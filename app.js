const Calendar = require('./services/Calendar.js');
const DiscordBot = require('./services/DiscordBot.js');

const calendar = new Calendar('./service-account.json');
const bot = new DiscordBot();

bot.client.on("messageCreate", async (message) => {
    if(message.content == '!daisy') {
        console.log(calendar.getEvents());

        const events = await calendar.getEvents();
       
        if(events) {
            return events.map(event => message.author.send('Alle ore ' + event.start.dateTime + ' dobbiamo provvedere per ' + event.summary));
        };

        return message.author.send('Ops.... qualcosa è andato storto'); 
    }; 
});


