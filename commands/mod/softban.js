const Command = require('../../structures/Command');
const { stripIndents } = require('common-tags');

module.exports = class SoftbanCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'softban',
			aliases: [],
			group: 'mod',
			memberName: 'softban',
			description: "Softban (kick + clear messages) a member of the guild",
			guarded: true
		});
	}

	async run(message) {
    let prefix
    if (!message.guild) return message.channel.send('This command is only available in a server.')
    else prefix = message.guild.commandPrefix 
    
    
     if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send("You don't have enough permissions to ban someone.");
     }
    
    let member = message.mentions.members.first();
    if(!member) {
      return message.channel.send("Mention someone to softban.");
    }
    if(!member.bannable) {
      return message.channel.send("The person who you requested to softban has more permissions than me.");
    }
    
    let reason = "Sankobot Softban"
    let u = member.user;
    
    let filter = m => m.author === message.author
    message.channel.send("Softbanning: `" + member.displayName + "`. Use `" + prefix + "confirm` to softban (`20`s).")
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {if (collected.first().content === prefix + "confirm") {
    
    member.ban(reason)
      .then(a => {message.guild.members.unban(u.id)})
      .catch(error => message.channel.send(`${message.author} I couldn't softban because of : ${error}`))
    message.channel.send(":bangbang:  `" + member.user.tag + "` has been soft banned by `" + message.author.tag + "`");
  } else {message.channel.send("Softban Cancelled")}})
      .catch(() => message.channel.send("Softban Cancelled"));
  }
}
