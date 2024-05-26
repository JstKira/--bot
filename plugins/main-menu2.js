
let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ معلوماتي: *${usedPrefix}*
┌─⊷ *😻:* 
▢ قناتي
▢ موفاضي
▢ رقمي
▢ https://wa.me/+967734144053
▢ الاسكربت
▢ قيد التطوير
└──────────────
`
    let pp = './src/fg_logo.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['معلوماتي']
handler.tags = ['main']
handler.command = ['معلوماتي', 'المطور'] 

export default handler
