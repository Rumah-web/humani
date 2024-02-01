# use the official ubuntu image
FROM ubuntu:latest as base
WORKDIR /usr/src

COPY . .

ARG NODE_VERSION=18

RUN apt-get update && \n\
    apt-get install -y curl && \n\
    apt-get install unzip

RUN curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.18" && \n\
    ln -s $HOME/.bun/bin/bun /usr/local/bin/bun
RUN curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n && \n\
    bash n $NODE_VERSION && \n\ 
    rm n && npm install -g n
RUN npm install -g pm2

# install dependency
RUN bun --version
RUN bun install

EXPOSE 3000
CMD [ "pm2-runtime", "bun run prod" ]