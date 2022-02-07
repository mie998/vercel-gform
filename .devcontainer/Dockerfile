FROM node:alpine
RUN apk update && apk add git

ENV PORT 3000
WORKDIR /work

COPY . .

RUN npm install 
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]
