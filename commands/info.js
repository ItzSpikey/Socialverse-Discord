const discord = require ("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Welkom bij Socialverse!")
    .setDescription("Om toegang te krijgen tot de server, moet je bewijzen dat je een mens bent door simpelweg op de onderstaande knop te klikken. Als je problemen hebt met verificatie of als de bot je niet kan verifiëren, open dan een ondersteuningsticket en geef aan wat de bot doet.")
    .setColor("#add8e6")

}

module.exports.help = {
    name: "info"
}