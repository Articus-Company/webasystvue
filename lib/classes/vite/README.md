<h1 align="center">
vite-webasyst-php
</h1>

<p align="center">
PHP хелпер для работы <a href="https://vite.dev/">Vite</a> с <a href="https://www.webasyst.ru/">Webasyst</a>.
</p>

<p align="center">
Предназначен для использования вместе с плагином <a href="https://github.com/Articus-Company/vite-plugin-webasyst">vite-plugin-webasyst</a>
</p>

## Установка

### Шаг 1: Получение файлов

* Вариант 1: **Клонирование репозитория**
    ```bash
    git clone https://github.com/Articus-Company/vite-webasyst-php.git
    ```
* Вариант 2: Скачайте архив из [репозитория](https://github.com/Articus-Company/vite-webasyst-php) и
  скопируйте файлы вручную.

### Шаг 2: Подключение в проекте

* Вариант 1: Поместите файлы `viteWebasyst.class.php` и `viteWebasystException.class.php` в
  `wa-apps/myapp/lib/classes/vite/`.
* Вариант 2: Добавьте в `wa-config/SystemConfig.class.php`
   (см. [документацию](https://developers.webasyst.ru/docs/cookbook/basics/common-classes/)):
    ```php
    waAutoload::getInstance()->add([
        'viteWebasyst' => 'wa-system/vendors/custom/viteWebasyst.class.php',
        'viteWebasystException' => 'wa-system/vendors/custom/viteWebasystException.class.php',
    ]);
    ```

## Использование
В Smarty-шаблоне:

```smarty
<head>
  {viteWebasyst::vite('themes/mytheme/dist')}
</head>
```
Где `'themes/mytheme/dist'` — путь к папке dist **относительно корня приложения**.

## Опции

Вторым аргументом передаётся массив опций. Все поля необязательны.

```smarty
{viteWebasyst::vite('themes/mytheme/dist', [
    'entry'      => ['src/main.ts'],       // Точки входа Vite.
    'hot'        => 'hot',                 // Имя hot-файла.
    'manifest'   => '.vite/manifest.json', // Путь к манифесту относительно папки dist.
    'react'      => false                  // Включить поддержку React Fast Refresh.
])}
```

## React

При использовании `@vitejs/plugin-react` в dev-режиме необходим preamble скрипт. Без него браузер
выбросит ошибку `@vitejs/plugin-react can't detect preamble`.

Включите опцию `react`:

```smarty
{viteWebasyst::vite('themes/mytheme/dist', [
    'entry' => ['src/main.tsx'],
    'react' => true
])}
```

Класс автоматически вставит нужный скрипт перед `@vite/client` в dev режиме. В prod режиме опция не
влияет на вывод.
