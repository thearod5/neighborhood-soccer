# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
