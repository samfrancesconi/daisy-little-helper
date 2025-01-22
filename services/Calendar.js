const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');
require('dotenv').config();

class Calendar {
    constructor(serviceAccountPath) {
        this.serviceAccount = serviceAccountPath;
        this.scopes = ['https://www.googleapis.com/auth/calendar'];

        this.auth = new GoogleAuth({
            keyFile: this.serviceAccount,
            scopes: this.scopes,
        });
    }

    async getEvents() {
        try {
            
            const authClient = await this.auth.getClient();
            
            const calendar = google.calendar({ version: 'v3', auth: authClient });

            const calendarId = process.env.CALENDAR_ID;

            const response = await calendar.events.list({
                calendarId,
            });

            return response.data.items;
        } catch (error) {
            console.error('Error in getEvents:', error);
            throw error;
        }
    }
}

module.exports = Calendar;
