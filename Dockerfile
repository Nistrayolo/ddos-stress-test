FROM node:6.3

MAINTAINER Ali Mihandoost i@ali.md

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000 5004

CMD ["npm", "start"]

