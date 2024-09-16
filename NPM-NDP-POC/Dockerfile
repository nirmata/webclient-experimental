# Stage 1: Build the project
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build --legacy-peer-deps

# Stage 2: Serve the built project using nginx
FROM nginx:stable-alpine

# Create and set permissions for Nginx directories
RUN mkdir -p /var/cache/nginx /var/run /var/log/nginx /etc/nginx/conf.d \
    && chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx /etc/nginx/conf.d /usr/share/nginx/html \
    && chmod -R 755 /var/cache/nginx /var/run /var/log/nginx /etc/nginx/conf.d

# Ensure nginx user can write to nginx.pid
RUN touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid

# Copy the built files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080
EXPOSE 8080

# Use nginx user to run the container
USER nginx

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
