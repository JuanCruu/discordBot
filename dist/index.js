"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
const config_json_1 = require("./config.json");
dotenv_1.config();
const client = new discord_js_1.Client();
client.on('ready', () => {
    console.log('MY BODY IS READY.');
});
client.on('message', (message) => {
    //console.log(message)
    if (message.content.startsWith(`${config_json_1.prefix}` + 'juan')) {
        //console.log('que pasa che,che che');
        message.channel.send('que pasa,che');
    }
});
client.login(process.env.a);
