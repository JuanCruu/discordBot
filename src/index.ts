import {Client} from 'discord.js'
import {config } from 'dotenv'
import {prefix} from './config.json'

config();
const client:Client =new Client();

client.on('ready',()=>{
    console.log('MY BODY IS READY.')
})
client.on('message',(message)=>{
    //console.log(message)
    if(message.content.startsWith(`${prefix}`+'juan')){

        //console.log('que pasa che,che che');
        message.channel.send('que pasa,che');
        
    }
})
client.login(process.env.a)