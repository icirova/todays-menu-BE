FROM node:21 

WORKDIR /app
COPY ["./src/", "/app/src"]
COPY ["app.ts", "package.json", "package-lock.json*", "tsconfig.json", ".env",  "./"]

RUN npm install
RUN npm run build

CMD [ "npm", "run", "start" ]