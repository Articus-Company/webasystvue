<template>
    <Fields vertical>
        <Field>
            <FieldName>Основные параметры</FieldName>
            <FieldValue middle>
                Настройте базовую информацию вашего магазина
            </FieldValue>
        </Field>

        <Field>
            <FieldName for-input>
                Название магазина
            </FieldName>
            <FieldValue>
                <input
                    type="text"
                    class="full-width"
                    placeholder="Мой интернет-магазин"
                >
            </FieldValue>
        </Field>

        <Field>
            <FieldName for-input>
                Email для заказов
            </FieldName>
            <FieldValue>
                <input
                    type="email"
                    class="full-width"
                    placeholder="shop@example.com"
                >
                <p class="hint">
                    На этот адрес будут приходить уведомления о новых заказах
                </p>
            </FieldValue>
        </Field>

        <Field>
            <FieldName for-input>
                Валюта по умолчанию
            </FieldName>
            <FieldValue>
                <input
                    type="text"
                    class="full-width"
                    placeholder="RUB"
                >
            </FieldValue>
        </Field>

        <Field>
            <FieldName checkbox/>
            <FieldValue>
                <label>
                    <span class="wa-checkbox">
                        <input
                            id="checkbox"
                            type="checkbox"
                            checked
                        >
                        <span>
                            <span class="icon">
                                <i class="fas fa-check"/>
                            </span>
                        </span>
                    </span>
                    Включить отзывы о товарах
                </label>
            </FieldValue>
        </Field>

        <Field>
            <FieldName for-checkbox/>
            <FieldValue>
                <label>
                    <span class="wa-checkbox">
                        <input
                            id="checkbox"
                            type="checkbox"
                        >
                        <span>
                            <span class="icon">
                                <i class="fas fa-check"/>
                            </span>
                        </span>
                    </span>
                    Показывать цены с учётом НДС
                </label>
            </FieldValue>
        </Field>

        <Field>
            <FieldName for-input>
                Описание магазина
            </FieldName>
            <FieldValue>
                <textarea
                    class="full-width"
                    placeholder="Краткое описание деятельности и ассортимента"
                />
                <p class="hint">
                    Не более 300 символов
                </p>
            </FieldValue>
        </Field>

        <Field>
            <FieldValue submit>
                <Button type="submit">
                    Сохранить настройки
                </Button>
                <Button color="light-gray">
                    Сбросить
                </Button>
            </FieldValue>
        </Field>
    </Fields>
</template>

<script setup lang="ts">
import {
    Button,
    Field,
    FieldName,
    Fields,
    FieldValue,
} from 'webasystvue'
</script>
