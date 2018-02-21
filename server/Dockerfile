
FROM node:8.9.4-alpine

COPY package.json /usr/server/package.json
COPY server.js /usr/server/server.js
WORKDIR /usr/server/
RUN npm install -s
EXPOSE 3000
CMD ["npm", "run", "start"]
