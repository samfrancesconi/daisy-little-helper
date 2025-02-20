require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

class DiscordBot {
    constructor() {
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent
            ]
        });

        this.client.login(process.env.DISCORD_TOKEN);
    }
}

module.exports = DiscordBot;