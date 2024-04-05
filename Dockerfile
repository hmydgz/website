FROM node:18

WORKDIR /home/node/app

COPY . /home/node/app

RUN npm add pnpm -g \
    && pnpm i

