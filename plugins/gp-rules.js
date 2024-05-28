
let handler = async function (m, { conn, text, usedPrefix }) {
	
	let chat = global.db.data.chats[m.chat]
    if (chat.rules === '') throw `✳️ ${mssg.gpRulesNan}`
     m.reply(`📜 *${mssg.gpRules}*\n\n${chat.rules}`)
     
}
handler.help = ['قواعد']
handler.tags = ['group']
handler.command = ['قواعد', 'reglas'] 

export default handler
