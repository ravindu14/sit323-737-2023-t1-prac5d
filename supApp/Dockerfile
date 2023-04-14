FROM node:slim

WORKDIR /subapp

COPY . /subapp

RUN yarn install

EXPOSE 8081

CMD ["yarn", "start"]