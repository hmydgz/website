FROM website-root

WORKDIR /home/node/app

RUN pnpm -F server build

ENTRYPOINT ["/usr/local/bin/pnpm"]

CMD ["-F", "server", "start:prod"]
# CMD ["start", "/home/node/app/packages/server/ecosystem.config.js"]