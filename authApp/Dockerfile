FROM node:slim

WORKDIR /authapp

COPY . /authapp

RUN yarn install

EXPOSE 8080

CMD ["yarn", "start"]