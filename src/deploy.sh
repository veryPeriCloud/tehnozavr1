#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

#сборка приложеня
npm run build

#переход в каталог сборки
cd dist

#инизиализация и загрузка кода в Github
git init
git add -A 
git commit -m 'deploy' 
git push -f git@github.com/veryPeriCloud/vue-app.git master:gh-pages

cd -
