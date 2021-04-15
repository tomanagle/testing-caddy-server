FROM node:14-alpine

ADD package.json /tmp/package.json

RUN rm -rf dist

RUN cd /tmp && npm install -q

# Code base
ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src

RUN npm run-script build

EXPOSE 4000

CMD ["node", "build/index.js"]
