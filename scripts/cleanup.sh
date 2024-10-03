#!/bin/bash

# Remove unused Docker resources
docker system prune -af

# Remove old npm cache
npm cache clean --force

# Clean up logs older than 7 days
find /var/log -name "*.log" -type f -mtime +7 -delete

# Remove old backups (keep last 7 days)
find /opt/backups -type f -mtime +7 -delete