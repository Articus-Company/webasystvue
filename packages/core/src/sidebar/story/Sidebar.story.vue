<template>
    <Story title="Sidebar/Demo">
        <Variant title="default">
            <div class="flexbox">
                <Sidebar>
                    Sidebar
                </Sidebar>
            </div>
        </Variant>
        <Variant title="header body footer">
            <div class="flexbox">
                <Sidebar flexbox>
                    <SidebarHeader>
                        Header
                    </SidebarHeader>
                    <SidebarBody>
                        Body
                    </SidebarBody>
                    <SidebarFooter>
                        Footer
                    </SidebarFooter>
                </Sidebar>
            </div>
        </Variant>
        <Variant title="overflow visible">
            <div class="flexbox">
                <Sidebar overflow-visible>
                    tooltips&nbsp;&&nbsp;dropdowns&nbsp;will&nbsp;overflow&nbsp;properly
                </Sidebar>
            </div>
        </Variant>
        <Variant title="scrolls with content">
            <div id="wa-app">
                <div class="flexbox">
                    <Sidebar scrolls-with-content>
                        Sidebar
                    </Sidebar>
                    <div class="content">
                        <div class="article">
                            <div class="article-body">
                                <section>
                                    <h1>Главный заголовок H1: Добро пожаловать в большой HTML-заполнитель</h1>
                                    <h2>Заголовок уровня H2: Введение в разнообразные теги</h2>
                                    <p>
                                        Это обычный абзац текста (<code>&lt;p&gt;</code>). <strong>Lorem ipsum
                                            dolor sit amet</strong>, consectetur adipiscing elit. <em>Sed do eiusmod
                                            tempor incididunt</em> ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat.
                                    </p>
                                    <h3>Заголовок H3: Более глубокая секция</h3>
                                    <p>
                                        Другой абзац. Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. <a href="#nowhere">Это
                                            пример ссылки</a>. Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <h4>Заголовок H4: Мелкие детали</h4>
                                    <p>
                                        Маленький текст. <small>Этот текст отформатирован тегом
                                            &lt;small&gt;.</small> Также можно использовать <sup>верхний
                                            индекс</sup> и <sub>нижний индекс</sub>.
                                    </p>
                                    <blockquote>
                                        <p>
                                            Это цитата, оформленная тегом <code>&lt;blockquote&gt;</code>. Она
                                            обычно выделяется отступами и курсивом.
                                        </p>
                                        <cite>— Автор цитаты</cite>
                                    </blockquote>
                                </section>

                                <section>
                                    <h2>Разнообразные списки</h2>
                                    <div style="display: flex; gap: 40px;">
                                        <div>
                                            <h4>Маркированный список (<code>&lt;ul&gt;</code>):</h4>
                                            <ul>
                                                <li>Первый пункт списка</li>
                                                <li>
                                                    Второй пункт с вложенным списком:
                                                    <ul>
                                                        <li>Вложенный пункт A</li>
                                                        <li>Вложенный пункт B</li>
                                                    </ul>
                                                </li>
                                                <li>Третий пункт</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4>Нумерованный список (<code>&lt;ol&gt;</code>):</h4>
                                            <ol>
                                                <li>Шаг номер один</li>
                                                <li>Шаг номер два</li>
                                                <li>Шаг номер три</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <h4>Список определений (<code>&lt;dl&gt;</code>):</h4>
                                            <dl>
                                                <dt>HTML</dt>
                                                <dd>Язык гипертекстовой разметки.</dd>
                                                <dt>CSS</dt>
                                                <dd>Каскадные таблицы стилей.</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2>Пример таблицы (<code>&lt;table&gt;</code>)</h2>
                                    <table
                                        border="1"
                                        cellpadding="10"
                                        cellspacing="0"
                                        style="width: 100%; border-collapse: collapse;"
                                    >
                                        <thead>
                                            <tr>
                                                <th>Заголовок 1</th>
                                                <th>Заголовок 2</th>
                                                <th>Заголовок 3</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Данные ячейки 1A</td>
                                                <td>Данные ячейки 1B</td>
                                                <td>Данные ячейки 1C</td>
                                            </tr>
                                            <tr>
                                                <td>Данные ячейки 2A</td>
                                                <td>Данные ячейки 2B</td>
                                                <td>Данные ячейки 2C</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    Объединенная ячейка (colspan=2)
                                                </td>
                                                <td>Обычная ячейка</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td>Итог 1</td>
                                                <td>Итог 2</td>
                                                <td>Итог 3</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>

                                <section>
                                    <h2>Медиа-элементы</h2>
                                    <div class="media-container">
                                        <div class="media-box">
                                            <h4>Изображение (<code>&lt;img&gt;</code>):</h4>
                                            <img
                                                src="https://via.placeholder.com/600x400/4a86cf/FFFFFF?text=Placeholder+Image"
                                                alt="Пример изображения-заполнителя"
                                                style="width: 100%; height: auto;"
                                            >
                                        </div>
                                        <div class="media-box">
                                            <h4>Видео (<code>&lt;video&gt;</code>):</h4>
                                            <video
                                                controls
                                                style="width: 100%;"
                                                poster="https://via.placeholder.com/600x400/ff9900/FFFFFF?text=Video+Poster"
                                            >
                                                <source
                                                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                                    type="video/mp4"
                                                >
                                                Ваш браузер не поддерживает тег video.
                                            </video>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2>Пример формы (<code>&lt;form&gt;</code>)</h2>
                                    <form action="#">
                                        <fieldset>
                                            <legend>Информация о пользователе</legend>
                                            <p>
                                                <label for="name">Имя:</label><br>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Введите имя"
                                                >
                                            </p>
                                            <p>
                                                <label for="email">Email:</label><br>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    placeholder="example@mail.com"
                                                >
                                            </p>
                                            <p>
                                                <label for="message">Сообщение:</label><br>
                                                <textarea
                                                    id="message"
                                                    rows="4"
                                                    placeholder="Введите ваше сообщение..."
                                                />
                                            </p>
                                            <p>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="subscribe"
                                                    >
                                                    Подписаться на рассылку
                                                </label>
                                            </p>
                                            <p>
                                                Выберите вариант:<br>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option"
                                                        value="1"
                                                    >
                                                    Вариант 1
                                                </label>
                                                <br>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="option"
                                                        value="2"
                                                    >
                                                    Вариант 2
                                                </label>
                                            </p>
                                            <p>
                                                <label for="country">Страна:</label><br>
                                                <select id="country">
                                                    <option value="">
                                                        Выберите...
                                                    </option>
                                                    <option value="ru">
                                                        Россия
                                                    </option>
                                                    <option value="by">
                                                        Беларусь
                                                    </option>
                                                    <option value="kz">
                                                        Казахстан
                                                    </option>
                                                </select>
                                            </p>
                                            <button type="submit">
                                                Отправить
                                            </button>
                                            <button type="reset">
                                                Сбросить
                                            </button>
                                        </fieldset>
                                    </form>
                                </section>

                                <section>
                                    <h2>Код и преформатированный текст</h2>
                                    <pre>
<code>&lt;!-- Пример HTML-кода --&gt;
&lt;div class="example"&gt;
    &lt;p&gt;Это внутри тега &amp;lt;pre&amp;gt;. Пробелы и переносы сохраняются.&lt;/p&gt;
&lt;/div&gt;</code>
            </pre>
                                    <p>Встроенный <code>&lt;code&gt;</code> тег для выделения кода в строке.</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Variant>
        <Variant title="right">
            <div class="flexbox">
                <Sidebar right>
                    Sidebar right
                </Sidebar>
                <div class="content"/>
            </div>
        </Variant>
        <Variant title="width">
            <div class="flexbox">
                <Sidebar width="auto">
                    Sidebar width auto
                </Sidebar>
                <div class="content"/>
            </div>
        </Variant>
        <Variant title="height auto">
            <div class="flexbox">
                <Sidebar height-auto>
                    Sidebar height auto
                </Sidebar>
            </div>
        </Variant>
        <Variant title="rail">
            <div class="flexbox">
                <Sidebar rail>
                    <ul class="menu">
                        <li>
                            <a href="#">
                                <i class="fas fa-star"/>
                                <span>Won't be visible anyway</span>
                            </a>
                        </li>
                        <li class="selected">
                            <a href="#"><i class="fas fa-folder"/></a>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-tree"/></a>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-church"/></a>
                        </li>
                        <li class="top-padded">
                            <a href="#"><i class="fas fa-home"/></a>
                        </li>
                    </ul>
                </Sidebar>
            </div>
        </Variant>
        <Variant title="many sidebars">
            <div class="flexbox">
                <Sidebar rail>
                    Sidebar 1 rail
                </Sidebar>
                <Sidebar style="background: gold">
                    Sidebar 2 default
                </Sidebar>
                <Sidebar width="25">
                    Sidebar 3 width 25
                </Sidebar>
                <div class="content"/>
            </div>
        </Variant>
        <Variant title="mobile toggle">
            <div class="flexbox wrap-mobile">
                <Sidebar
                    flexbox
                    mobile-friendly
                >
                    <SidebarMobileToggle>
                        <div class="box align-center">
                            <a href="javascript:void(0)">
                                <i class="fas fa-bars"/>
                                Меню
                            </a>
                        </div>
                    </SidebarMobileToggle>
                    <SidebarHeader style="display: block">
                        <ul class="menu mobile-friendly">
                            <li>
                                <a href="javascript:void(0)">
                                    <i class="fas fa-home"/> Header
                                </a>
                            </li>
                        </ul>
                    </SidebarHeader>
                    <SidebarBody style="display: block">
                        <ul class="menu mobile-friendly">
                            <li>
                                <a href="javascript:void(0)">
                                    <i class="fas fa-apple-alt"/> Body
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i class="fas fa-pepper-hot"/> Item 1
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i class="fas fa-lemon"/> Item 2
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i class="fas fa-carrot"/> Item 3
                                </a>
                            </li>
                        </ul>
                    </SidebarBody>
                    <SidebarFooter style="display: block">
                        <ul class="menu mobile-friendly">
                            <li>
                                <a href="javascript:void(0)">
                                    <i class="fas fa-cog"/> Footer
                                </a>
                            </li>
                        </ul>
                    </SidebarFooter>
                </Sidebar>
                <div class="content"/>
            </div>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Sidebar, SidebarBody, SidebarFooter, SidebarHeader } from '@/sidebar'
import SidebarMobileToggle from '@/sidebar/SidebarMobileToggle.vue'
</script>
