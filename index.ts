import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome to my bot!');
});

bot.help((ctx) => {
  ctx.reply('This is a help message.');
});

bot.command('hello', (ctx) => {
  ctx.reply('Hello!');
});
bot.command('fox', async (ctx) => {
  const response = await fetch('https://api.tinyfox.dev/img.json?animal=fox');
  const buffer = await (response.json());
  console.log(buffer)
  ctx.reply("https://api.tinyfox.dev" + buffer.loc);
});

bot.on('text', (ctx) => {
  ctx.reply(`You said: ${ctx.message.text}`);
});


bot.launch();
console.log("Running bot")
