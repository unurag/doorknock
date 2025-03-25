const axios = require('axios');

const sendMessageToDiscord = async (message, color) => {
    axios.post(process.env.DISCORD_SIGN_UP_WEBHOOK_URL, {
        "content": null,
        "embeds": [
            {
            "title": message,
            "color": color
            }
        ],
        "attachments": []
        });
};

module.exports = { sendMessageToDiscord };