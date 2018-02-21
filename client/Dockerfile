
# Build the client

FROM node:8.9.4-alpine AS build

RUN npm install -g --unsafe-perm @angular/cli
COPY . /usr/client/
WORKDIR /usr/client/
RUN npm install -s
RUN ng build --prod

# Serve the client

FROM nginx:alpine

COPY --from=build /usr/client/dist /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
