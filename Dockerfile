FROM node:latest
ADD . /app/
WORKDIR /app
COPY package.json /app

RUN npm install --legacy-peer-deps
# RUN npm install yarn

COPY . /app

EXPOSE 3000

CMD yarn start