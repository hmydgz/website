FROM website-root

WORKDIR /home/node/app

RUN pnpm -F website build

ENTRYPOINT ["/usr/local/bin/pnpm"]

CMD ["-F", "website", "start"]