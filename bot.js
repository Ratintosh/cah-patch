const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

var beg = message.content.slice(6, message.content.length)






client.on("message", function(message) {




    if(message.content === "-draw") {
          var myArray = [
            "____ tastes like food.",
             "____ worships satan.",
             "____ finds joy in kpop.",
             "Witches have ____."



            ];
          var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
          message.channel.send("The Card: **" + randomItem + "**")
          message.channel.send("Awaiting input...")
    }

    if (message.content.startsWith("-place ")) {
       message.delete(1); //Supposed to delete message
       message.channel.send(beg);
    }



});


client.login(process.env.BOT_TOKEN);
