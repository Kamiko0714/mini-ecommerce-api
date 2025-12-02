#!/bin/bash
DATE=$(date +%Y-%m-%d-%H-%M-%S)
SRC="/etc"
DEST="/backup/etc-$DATE.tar.gz"

tar -czf $DEST $SRC

echo "Backup done at $(date)" >> /var/log/backup.log
