FROM php:7.2-fpm

RUN apt-get update  \
  && docker-php-ext-install pdo_mysql

# # 日本語環境を追加
# RUN apt-get update && apt-get install -y locales \
#   && sed -i -e 's/# \(ja_JP.UTF-8\)/\1/' /etc/locale.gen \
#   && locale-gen \
#   && update-locale LANG=ja_JP.UTF-8

COPY php.ini /usr/local/etc/php/