# Step 1: Use Node.js official image as base
FROM node:16-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Expose port 8086 for communication
EXPOSE 8086

# Step 7: Set environment variable (optional for production)
ENV NODE_ENV=production

# Step 8: Start the application (it will run app.js)
CMD ["npm", "start"]

