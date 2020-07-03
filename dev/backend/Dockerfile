FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run knex:migrate
RUN npm run knex:seed
EXPOSE 3333
CMD ["npm", "start"]
