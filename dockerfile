# 1. Use Node base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy source code
COPY . .

# 6. Build the app
RUN npm run build

# 7. Install serve to run build
RUN npm install -g serve

# 8. Expose port
EXPOSE 3000

# 9. Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
