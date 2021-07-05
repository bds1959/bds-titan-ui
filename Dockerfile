FROM node:14-alpine as build-step

#RUN useradd -ms /bin/bash titan

#RUN usermod -aG sudo titan

RUN mkdir /Titan_UI

COPY . /Titan_UI/

#RUN chown -R titan.titan /home/titan/Titan_UI

#USER titan

WORKDIR /Titan_UI

RUN npm install

RUN npm run build

#EXPOSE 3000

CMD [ "npm", "start" ]
#CMD [ "serve", "-s", "-l", "tcp://0.0.0.0:8080", "build" ]
# Stage 2

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-step /Titan_UI/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
