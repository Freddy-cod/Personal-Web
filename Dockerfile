# Use a lightweight Nginx base image for serving static files
FROM nginx:alpine

# Copy all project files (HTML, CSS, JS, images, etc.) to Nginx's default static directory
COPY . /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx in the foreground (daemon off prevents it from running as a background process)
CMD ["nginx", "-g", "daemon off;"]
