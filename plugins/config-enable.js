const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `*𝐎𝐏𝐂𝐈𝐎𝐍:* 🧸 | 𝐖𝐄𝐋𝐂𝐎𝐌𝐄
*Comando:* ${usedPrefix + command} welcome
*Descripción:* Activa o desactiva la bienvenida en el grupo.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 👥 | 𝐌𝐎𝐃𝐎 𝐏𝐔𝐁𝐋𝐈𝐂𝐎
*Comando:* ${usedPrefix + command} public
*Descripción:* El Bot se vuelve de uso publico y/o privado.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🥵 | 𝐌𝐎𝐃𝐎 𝐇𝐎𝐑𝐍𝐘
*Comando:* ${usedPrefix + command} modohorny
*Descripción:* Activa o desactiva los comandos +18 en el grupo.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🗡️ | 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊
*Comando:* ${usedPrefix + command} antilink
*Descripción:* Activa o desactiva el anti-enlaces de WhatsApp.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* ⚔️ | 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 2
*Comando:* ${usedPrefix + command} antilink2
*Descripción:* Activa o desactiva el anti-enlaces que inician en HTTPS.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🔎 | 𝐃𝐄𝐓𝐄𝐂𝐓
*Comando:* ${usedPrefix + command} detect
*Descripción:* Activa o desacriva las notificaciones de cambios en el grupo.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🔎 | 𝐃𝐄𝐓𝐄𝐂𝐓 2
*Comando:* ${usedPrefix + command} detect2
*Descripción:* Detecta modificaciones en el grupo y mantiene una mejor gestion.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🛡️ | 𝐑𝐄𝐒𝐓𝐑𝐈𝐂𝐓
*Comando:* ${usedPrefix + command} restrict
*Descripción:* Activa o desactiva las restricciones del Bot, como la de sacar o agregar personas a un grupo.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🔮 | 𝐀𝐔𝐓𝐎𝐑𝐄𝐀𝐃
*Comando:* ${usedPrefix + command} autoread
*Descripción:* Marca como leido los mensajes Pestados automáticamente.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🔊 | 𝐀𝐔𝐃𝐈𝐎𝐒
*Comando:* ${usedPrefix + command} audios
*Descripción:* Activa o desactiva los comandos de audios sin prefijos, en el grupo.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 👾 | 𝐀𝐔𝐓𝐎𝐒𝐓𝐈𝐂𝐊𝐄𝐑
*Comando:* ${usedPrefix + command} autosticker 
*Descripción:* Todas las imagenes o videos enviados en el grupo se convierten en stickers. 

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 💬 | 𝐏𝐂𝐎𝐍𝐋𝐘
*Comando:* ${usedPrefix + command} pconly
*Descripción:* El Bot solo responderá a los comandos si es ANTILLAMado.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🏢 | 𝐆𝐂𝐎𝐍𝐋𝐘
*Comando:* ${usedPrefix + command} gconly
*Descripción:* El Bot solo respondera a los comandos si es un grupo. 
*Nota:* Esta comando solo podrá ser usado por owners del Bot.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* ❌ | 𝐀𝐍𝐓𝐈𝐕𝐈𝐄𝐖𝐎𝐍𝐂𝐄 
*Comando:* ${usedPrefix + command} antiviewonce
*Descripción:* Las imagenes enviadas para ver solo una vez, son reenviadas normal por el Bot. 

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 📵 | 𝐀𝐍𝐓𝐈𝐋𝐋𝐀𝐌𝐀𝐃𝐀
*Comando:* ${usedPrefix + command} anticall
*Descripción:* El Bot bloquerá a las personas que llamen al Bot. 
*Nota:* Este comando solo podra ser usado por owners del Bot.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🚫 | 𝐀𝐍𝐓𝐈𝐏𝐑𝐈𝐕𝐀𝐃𝐎
*Comando:* ${usedPrefix + command} antiprivado
*Descripción:* El Bot bloquerá a las personas que escriban al privado del Bot. 
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🤬 | 𝐀𝐍𝐓𝐈𝐓𝐎𝐗𝐈𝐂
*Comando:* ${usedPrefix + command} antitoxic
*Descripción:* Detecta la malas palabras y advierte al participante del grupo, antes de ser eliminado.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🕸️ | 𝐀𝐍𝐓𝐈𝐓𝐑𝐀𝐁𝐀𝐒
*Comando:* ${usedPrefix + command} antitraba
*Descripción:* El Bot detecta textos largos que podrian ser virus y causar lag en el chat y elimina al usuario.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🔪 | 𝐀𝐍𝐓𝐈𝐀𝐑𝐀𝐁𝐄𝐒
*Comando:* ${usedPrefix + command} antiarabes
*Descripción:* Si un numero árabe se uné al grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el welcome y el restrict.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🔪 | 𝐀𝐍𝐓𝐈𝐀𝐑𝐀𝐁𝐄𝐒 2
*Comando:* ${usedPrefix + command} antiarabes2
*Descripción:* Si un numero árabe escribe en el grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🤖 | 𝐌𝐎𝐃𝐄𝐉𝐀𝐃𝐈𝐁𝐎𝐓
*Comando:* ${usedPrefix + command} modejadibot
*Descripción:* Activa o desactiva el uso del comando para sub bots (${usedPrefix}serbot / ${usedPrefix}jadibot). 
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 💻 | 𝐌𝐎𝐃𝐎𝐀𝐃𝐌𝐈𝐍
*Comando:* ${usedPrefix + command} modoadmin
*Descripción:* El Bot solo responderá a los admins del grupo.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 😃 | 𝐒𝐈𝐌𝐒𝐈𝐌𝐈
*Comando:* ${usedPrefix + command} simsimi
*Descripción:* El Bot empezará a responder a los mensajes usando la IA de SimSimi.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* ⏳ | 𝐀𝐍𝐓𝐈𝐒𝐏𝐀𝐌
*Comando:* ${usedPrefix + command} antispam
*Descripción:* El Bot detecta cuando un usuario hace spam de comando y lo banea por 5 segundos y lo advierte.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🧿 | 𝐀𝐍𝐓𝐈𝐃𝐄𝐋𝐄𝐓𝐄 
*Comando:* ${usedPrefix + command} antidelete
*Descripción:* El Bot detecta cuando un usuario elimina un mensaje y lo reenvía.

--------------------------------

*𝐎𝐏𝐂𝐈𝐎𝐍:* 🔊 | 𝐀𝐔𝐃𝐈𝐎𝐒_𝐁𝐎𝐓
*Comando:* ${usedPrefix + command} audios_bot
*Descripción:* Se desactivan los audios del Bot del menuaudios para todos los chats privados.
*Nota:* Este comando solo podrá ser usado por owners del Bot.`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type}\n🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? 'ACTIVADO' : 'DESACTIVADO'}\n📣 𝐏𝐀𝐑𝐀: ${isAll ? 'ESTE BOT' : isUser ? '' : 'ESTE CHAT'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;
