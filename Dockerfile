# Base Image
FROM node:18-alpine
# Using Node.js version 18 on Alpine Linux for a lightweight image
# And we use docker compose to get them at one place

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./ 
# Copying the package.json

# Install dependencies in docker
# RUN npm install
# Using npm install --production to avoid installing devDependencies
ARG NODE_ENV=production
RUN if [ "${NODE_ENV}" = "development" ]; \
    then npm install --only=production; \
    else npm install; \
    fi

# Copy the rest of the application code
COPY . .
# Copying rest of the files in the current directory to the working directory in the container

# Expose the port the app runs on port number
# EXPOSE 9898
ENV PORT=9797
EXPOSE ${PORT}

# Start the application+
# CMD ["npm", "run", "dev"]

# Based on docker compose file we will override this command
CMD ["node","expressServer.js"]