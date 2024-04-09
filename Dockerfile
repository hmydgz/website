FROM node:18-alpine

WORKDIR /home/node/app

COPY . /home/node/app

RUN npm add pnpm -g \
    && pnpm i