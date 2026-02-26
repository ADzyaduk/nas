export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    const { name, phone, service } = body

    if (!name || !phone) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Имя и телефон обязательны',
        })
    }

    const token = config.telegramBotToken
    const chatId = config.telegramChatId

    if (!token || !chatId || token === 'your_bot_token_here') {
        throw createError({
            statusCode: 500,
            statusMessage: 'Telegram бот не настроен. Добавьте NUXT_TELEGRAM_BOT_TOKEN и NUXT_TELEGRAM_CHAT_ID в .env',
        })
    }

    const message = [
        '📋 *Новая заявка с сайта*',
        '',
        `👤 *Имя:* ${name}`,
        `📞 *Телефон:* ${phone}`,
        service ? `💆 *Услуга:* ${service}` : '',
        '',
        `🕐 *Время:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`,
    ].filter(Boolean).join('\n')

    try {
        const response = await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            body: {
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown',
            },
        })

        return { success: true }
    } catch (error: any) {
        console.error('Telegram API error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Не удалось отправить сообщение в Telegram',
        })
    }
})
