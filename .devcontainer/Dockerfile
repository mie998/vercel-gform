FROM node:alpine

ENV PORT 3000
WORKDIR /work

COPY . .

RUN npm install 
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]
