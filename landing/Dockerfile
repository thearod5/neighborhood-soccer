# Use an official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM public.ecr.aws/docker/library/node:18-buster-slim

WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package.json .
COPY package-lock.json .

# Install dependencies in the container
RUN npm install

# # Install a simple http server for serving static content
RUN npm install -g serve

# Copy the rest of your app's source code from your host to your image filesystem.
COPY tsconfig.json .
COPY src/ /app/src
COPY public /app/public

# # Build the app for production.
RUN npm run build

# # Your app builds to the 'build' folder by default
# # Command to run the app
CMD ["serve", "-s", "build"]
