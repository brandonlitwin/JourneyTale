# Use a Node.js image
FROM node:23

# Set working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the frontend code to the container
COPY . .

# Build the application
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
