FROM php:7.4.7-fpm
WORKDIR /var/www/html

RUN apt-get update  \
  && docker-php-ext-install pdo_mysql

COPY php.ini /usr/local/etc/php/