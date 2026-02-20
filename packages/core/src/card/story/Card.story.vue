<template>
    <Story title="Card/Demo">
        <Variant title="Example 1">
            <Card style="width: 300px">
                <CardImage>
                    <a href="https://ru.wikipedia.org/wiki/Кавказский_заповедник">
                        <img src="https://demo1-ru.webasyst.com/wa-data/public/photos/53/01/153/153.500.jpg">
                    </a>
                </CardImage>
                <CardDetails>
                    <h5>Кавказский заповедник</h5>
                    <p class="small">
                        Государственный природный заповедник. Самая большая по территории и старейшая, особо охраняемая природная территория на Северном Кавказе.
                        <a href="https://ru.wikipedia.org/wiki/Кавказский_заповедник">Википедия</a>.
                    </p>
                    <hr>
                    <div class="fields vertical small custom-mb-12">
                        <div class="field">
                            <div class="name">
                                Координаты
                            </div>
                            <div class="value">
                                <strong>43°50′10″ с. ш. 40°24′03″ в. д.</strong>
                            </div>
                        </div>
                        <div class="field">
                            <div class="name">
                                Дата основания
                            </div>
                            <div class="value">
                                12 мая 1924 года
                            </div>
                        </div>
                    </div>
                </CardDetails>
            </Card>
        </Variant>
        <Variant title="Example 2">
            <Card
                class="card"
                style="width: 250px;"
            >
                <CardDetails>
                    <h5 class="heading">
                        <span>Featured</span>
                        <span class="count">
                            ⭐
                        </span>
                    </h5>
                </CardDetails>
                <CardImage
                    style="
                        height: 150px;
                        background: #1b94ee url('https://pocketlists.com/wa-apps/site/themes/pl2site/img/pl2promo-iconmix-background.jpg') no-repeat; background-size: 320%; background-position: bottom right;
                    "
                />
                <CardDetails>
                    <h3><a href="https://pocketlists.com">Pocket Lists</a></h3>
                    <p class="small">
                        The design of Pocket Lists is inspired by the real life experience of making lists of things and keeping them in our pockets. Instantly familiar, robust, and dead simple to use — the ultimate to-do list app that helps families and individuals stay productive.
                    </p>
                    <input
                        type="button"
                        class="button full-width large"
                        value="Download"
                    >
                    <p class="hint align-center">
                        &copy; 1312 Inc.
                    </p>
                </CardDetails>
            </Card>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Card, CardDetails, CardImage } from '@/card'
</script>
