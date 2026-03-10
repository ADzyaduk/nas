FROM node:20-alpine AS builder

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production \
    NITRO_PORT=3000 \
    PORT=3000

# Эти переменные будут задаваться в рантайме (docker run / compose / k8s)
ENV NUXT_TELEGRAM_BOT_TOKEN="" \
    NUXT_TELEGRAM_CHAT_ID=""

COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

