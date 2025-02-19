require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const Calendar = require('./services/Calendar.js');
const calendar = new Calendar('./service-account.json');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login(process.env.DISCORD_TOKEN);


client.on("messageCreate", async (message) => {
    if(message.content == '!daisy') {
        calendar.getEvents()
            .then(events => {
                events.map(event => message.author.send('Alle ore ' + event.start.dateTime + ' dobbiamo provvedere per ' + event.summary));
            })
    }
       
})
