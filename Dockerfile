# Dockerfile

# ==== CONFIGURE =====
#Stage 1
# Use a Node 17 base image
FROM node:16-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

#Stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]


