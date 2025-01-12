FROM node:20.14 AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build --configuration=production
FROM nginx:alpine
COPY --from=build /app/dist/med-monitor-app/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

