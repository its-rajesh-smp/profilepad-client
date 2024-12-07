# Step 1: Build the React app
FROM node:16 

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json . 
COPY package-lock.json .
RUN npm install

# Copy all project files
COPY . .
