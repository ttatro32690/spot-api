FROM node:14

WORKDIR /src

COPY package*.json ./
COPY ./ ./

RUN yarn

EXPOSE 9000
CMD [ "yarn", "start:dev" ]