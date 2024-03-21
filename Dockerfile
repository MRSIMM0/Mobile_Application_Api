FROM oven/bun:1

WORKDIR /app

COPY package.json ./

RUN bun install

COPY . .

ARG PORT=3005
EXPOSE $PORT

CMD ["bun", "./src/index.ts"]