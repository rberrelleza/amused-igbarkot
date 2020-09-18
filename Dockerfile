FROM node:14
WORKDIR /usr/src/dapp
COPY . .
ENV YARN_CACHE_FOLDER=/usr/local/share/.cache/yarn/v6
RUN yarn install