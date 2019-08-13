FROM node:10

RUN groupadd -g 16752 xarples && useradd -u 16752 -g xarples xarples \
&& mkdir -p /usr/local/src/xarples \
&& mkdir -p /home/xarples \
&& chown -R xarples:root /usr/local/src/xarples \
&& chown -R xarples:root /home/xarples \
&& chmod -R 0770 /usr/local/src/xarples

WORKDIR /usr/local/src/xarples

COPY ./package*.json /usr/local/src/xarples/

RUN npm install

COPY packages/xarples-utils /usr/local/src/xarples/packages/xarples-utils
COPY packages/xarples-accounts-db /usr/local/src/xarples/packages/xarples-accounts-db
COPY packages/xarples-accounts-api /usr/local/src/xarples/packages/xarples-accounts-api
COPY lerna.json /usr/local/src/xarples

RUN chown -R xarples:root /usr/local/src/xarples

USER xarples

RUN npx lerna link

RUN npx lerna bootstrap

RUN npx lerna run build 

EXPOSE 5000

CMD ["npx", "lerna", "run", "dev", "--stream", "--scope=@xarples/accounts-api"]