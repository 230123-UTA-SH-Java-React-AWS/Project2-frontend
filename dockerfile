# Build stage
FROM node:14.16.0 as build
WORKDIR /app

# Copy the app to the container
COPY . /app/

# Configure the container to build the React app
RUN npm install
RUN npm run build

# Serve stage
FROM node:14.16.0
WORKDIR /app

# Copy the build folder from the build stage
COPY --from=build /app/build /app/build

# Install the serve package globally
RUN npm install -g serve

# Expose the default serve port
EXPOSE 3000

# Serve the build folder
CMD ["serve", "-s", "build"]