const dotenv = require("dotenv");
const { Telegraf } = require("telegraf");
const axios = require("axios");

const tr = require("./translator")

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const users = [process.env.TELEGRAM_BOT_OWNER, "kay_day"]


bot.start((ctx) => {
    if (users.includes(ctx.update.message.from.username)) {
        ctx.reply("Yo!")
    }
    else {
        ctx.reply("User not found")
    }
});


bot.on('text', ctx => {
    const original = ctx.message.text;
    console.log(original);

    if (users.includes(ctx.update.message.from.username)) {

       tr.translate(original).then(translation => ctx.reply(translation));

    }
})


bot.launch();
console.log("Bot is running...")


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
