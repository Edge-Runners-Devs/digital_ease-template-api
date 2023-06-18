FROM node:18

COPY . /app

RUN npm i cross-env -g

WORKDIR /app

RUN npm i

CMD [ "npm", "run", "start:dev:docker" ]