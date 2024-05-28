#!/bin/bash

# Функция для проверки последней выполненной команды
check_last_command() {
    if [ $? -ne 0 ]; then
        echo "Ошибка: $1 не выполнена успешно."
        exit 1
    fi
}

# 1. Остановка всех процессов pm2
pm2 kill
check_last_command "pm2 kill"

# 2. Получение последних изменений из репозитория
git pull
check_last_command "git pull"

# 3. Сборка проекта
npm run build
check_last_command "npm run build"

# 4. Запуск приложения через pm2
pm2 start npm --name r_v0.0.1_test_bootstrap -- start
check_last_command "pm2 start npm --name r_v0.0.1_test_bootstrap -- start"

echo "Все команды выполнены успешно."
