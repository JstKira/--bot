
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `✳️ ${mssg.example} *${usedPrefix + command}* Lil Peep hate my life`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧') 
  let play = `
	≡ *تفضل طلبك*
┌──────────────
▢ 📌 *${mssg.title}:* ${vid.title}
▢ 📆 *${mssg.aploud}:* ${vid.ago}
▢ ⌚ *${mssg.duration}:* ${vid.timestamp}
▢ 👀 *${mssg.views}:* ${vid.views.toLocaleString()}
└──────────────`
 await conn.sendButton2(m.chat, play, mssg.ig, thumbnail, [
    ['🎶 موسيقة', `${usedPrefix}fgmp3 ${url}`],
    ['🎥 فيديو', `${usedPrefix}fgmp4 ${url}`]
  ], null, [['Canal', `${fgcanal}`]], m)
}
handler.help = ['شغل']
handler.tags = ['dl']
handler.command = ['شغل', 'playvid']
handler.disabled = false

export default handler
