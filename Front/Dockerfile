FROM node:12.18.2 AS node
WORKDIR app
COPY package.json /app/
#RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
#RUN ng build --prod
RUN $(npm bin)/ng build --prod

FROM nginx:1.13
COPY --from=node /app/dist/Front /usr/share/nginx/html
COPY ./Docker-config/nginx-custom.conf /etc/nginx/conf.d/default.conf