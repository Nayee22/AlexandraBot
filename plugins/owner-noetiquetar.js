let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

 m.reply(`*[ ⚠ ️] No etiquetes a mi creador, si es algo urgente contacta con el a su chat privado*`)
}
handler.customPrefix = /@51907183648/@51967647592/i;
handler.command = new RegExp();

export default handler;
