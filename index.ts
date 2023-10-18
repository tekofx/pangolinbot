import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TOKEN);
const commands = [
  { command: "start", description: "Inicia el bot" },
  { command: "fox", description: "Envia imagen de un zorro" }
]

bot.start((ctx) => {
  ctx.reply("Hola soy Pangolin, pulsa en menú para ver mis comandos!");
});

bot.help((ctx) => {
  const text = commands.map(comando => `/${comando.command}: ${comando.description}`).join("\n");
  ctx.reply(text);
})

bot.command('hello', (ctx) => {
  ctx.reply('Hello!');
});

bot.command('fox', async (ctx) => {
  const response = await fetch('https://api.tinyfox.dev/img.json?animal=fox');
  const buffer = await (response.json());
  ctx.reply("https://api.tinyfox.dev" + buffer.loc);
});

bot.telegram.setMyCommands(commands);

bot.launch();
console.log("Running bot")
