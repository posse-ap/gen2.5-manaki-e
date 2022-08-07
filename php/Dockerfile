FROM php:7.2-fpm

RUN apt-get update  \
  && docker-php-ext-install pdo_mysql

# 日本語環境を追加
RUN apt-get update && apt-get install -y locales \
    && sed -i -e 's/# \(ja_JP.UTF-8\)/\1/' /etc/locale.gen \
    && locale-gen \
    && update-locale LANG=ja_JP.UTF-8
# ここまで

# RUN apt-get update \
#   && docker-php-ext-install pdo_mysql \
#   && apt-get install -y locales \
#   && locale-gen ja_JP.UTF-8 \
#   && echo "export LANG=ja_JP.UTF-8" >> ~/.bashrc

# ENV LANG ja_JP.UTF-8
# ENV LANGUAGE ja_JP:ja
# ENV LC_ALL ja_JP.UTF-8

COPY php.ini /usr/local/etc/php/