
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `✳️ _${mssg.notext}_\n\n📌${mssg.example} *${usedPrefix + command}* fgmods`
    //let stiker = await sticker(null, global.API('xteam', '/attp', { file: '', text }), global.packname, global.author)
     let stiker = await sticker(null, global.API('fgmods', '/api/maker/attp', { text }, 'apikey'), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m )
    throw stiker.toString()
}
handler.help = ['ملصق2 <..>']
handler.tags = ['sticker']
handler.command = ['ملصق2'] 

export default handler
