const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("667477083064369192")
setInterval(function() {
channel.send(`سفاح ايز هيرو برزر سفاح ايز هيرو برزر سفاح ايز هيرو برزر سفاح ايز هيرو برزر سفاح ايز هيرو برزر `);
}, 30)
})

client.login(process.env.BOT_TOKEN);