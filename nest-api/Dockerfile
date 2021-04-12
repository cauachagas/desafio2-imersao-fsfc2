FROM node:fermium-alpine3.13

RUN apk add --no-cache bash

# Versão 7 do npm. Evita o erro com lockfileVersion v2
RUN npm install -g npm

# Versão mais atual, na data de criação desse Dockerfile
RUN npm install -g @nestjs/cli@7.6.0

USER node

WORKDIR /home/node/app