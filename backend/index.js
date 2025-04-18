import { Markup, Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAF_TOKEN);

function getMainMenu() {
    return Markup.inlineKeyboard([
        [
            Markup.button.webApp(
                "🚀 Start",
                // "https://telegramminiapp-six.vercel.app/"
                "https://telegramminiapp-lyart.vercel.app/"
            )
        ],
        [
            Markup.button.callback("📜 Presentation", "Show_Presentation")
        ],
        [
            Markup.button.url(
                "🛠 Support",
                "https://t.me/@Harsh09R"
            )
        ],
        [
            Markup.button.url(
                "👥 Invite Friend",
                "https://t.me/share/url?url=https://t.me/your_bot_username&text=Join%20me%20on%20this%20bot!"
            )
        ]
    ]);
}

bot.start(async (ctx) => {
    try {
        const telegramId = ctx.from.id.toString();
        const username = ctx.from.username;
        console.log(`Bot started by ${username} (${telegramId})`);

        await ctx.reply(
            `Welcome 👋, ${username}! How can I assist you?

Tap Start in the BITTON telegram bot and mine BTN tokens!

- Tap on the coin in the centre of the screen - this allows you to generate ENERGY
- Every day 36,000 BTNs are distributed to ENERGY holders.
- To get more ENERGY - make an UPGRADE NFT.

Get your BTNs today!`,
            getMainMenu()
        );

    } catch (error) {
        console.error("Error handling bot start:", error);
        ctx.reply("Failed to start the bot. Please try again later.");
    }
});

bot.action("Show_Presentation", async (ctx) => {
    try {


        const pdfPath = "./demo.pdf";

        await ctx.replyWithDocument({
            source: pdfPath,
            filename: "Project_Presentation.pdf",
        });

    } catch (error) {
        console.error("Error sending PDF:", error);
        ctx.reply("Failed to send the presentation. Please try again later.");
    }
});

(async () => {
    await bot.telegram.deleteWebhook(); // Remove existing webhook
    await bot.launch(); // Start polling
})();

