FROM node

# cypress requirements
RUN apt-get update && apt-get install -y xvfb libnss3 libgtk-3-0 libxss1 libasound2

ADD package.json .
ADD package-lock.json .
RUN npm ci --unsafe-perm=true --allow-root cypress

ADD . .

CMD npm run app:serve & npm run e2e:run
