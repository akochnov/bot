FROM node:19
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm ci --only=production
COPY . .
CMD [ "node", "bot.js" ]