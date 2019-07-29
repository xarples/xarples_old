FROM node:10

WORKDIR /usr/local/src/xarples/accounts

COPY ./src/accounts/package* /usr/local/src/xarples/accounts/

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]