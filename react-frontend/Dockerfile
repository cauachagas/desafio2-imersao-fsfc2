FROM node:fermium-alpine3.13

RUN apk add --no-cache bash

# Versão 7 do npm. Evita o erro com lockfileVersion v2
RUN npm install -g npm

USER node

WORKDIR /home/node/app