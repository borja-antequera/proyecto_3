#!/usr/bin/env bash

apt-get update
apt-get install -y apache2
if ! [ -L /var/www/html/]; then
    sudo rm -rf /var/www/html/
    sudo ln -fs /vagrant /var/www/html
fi
