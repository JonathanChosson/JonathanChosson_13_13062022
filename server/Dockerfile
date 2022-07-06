FROM node
ADD . /app/
WORKDIR /app
COPY package.json /app

# RUN npm install
RUN npm install && \
    npm rebuild bcrypt --build-from-source 
RUN npm install nodemon
# RUN npm rebuild bcrypt --build-from-source
# RUN npm run populate-db

COPY . /app

EXPOSE 3001

CMD npm run dev:server 

