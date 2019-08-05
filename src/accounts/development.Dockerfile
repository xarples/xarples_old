FROM node:10

WORKDIR /usr/local/src/xarples

COPY ./package* /usr/local/src/xarples/

RUN npm install

COPY . .

RUN npx lerna bootstrap

RUN npx lerna link

RUN npx lerna run build

EXPOSE 5000

CMD ["npx", "lerna", "run", "dev", "--stream", "--scope=@xarples/accounts"]