<template>
    <Story title="Flexbox/Demo">
        <Variant title="default">
            <Flexbox>
                <div>Элемент 1</div>
                <div>
                    <a href="#">Username</a>
                </div>
                <div>
                    <div style="padding: 20px 5px; background: rgba(33,66,88,.2);">
                        Высокий элемент
                    </div>
                </div>
            </Flexbox>
        </Variant>
        <Variant title="space-xx">
            <Flexbox space="32">
                <div>Элемент 1</div>
                <div>
                    <a href="#">Username</a>
                </div>
                <div>
                    <div style="padding: 20px 5px; background: rgba(33,66,88,.2);">
                        Высокий элемент
                    </div>
                </div>
            </Flexbox>
        </Variant>
        <Variant title="middle">
            <Flexbox middle>
                <div>Элемент 1</div>
                <div>
                    <a href="#">Username</a>
                </div>
                <div>
                    <div style="padding: 20px 5px; background: rgba(33,66,88,.2);">
                        Высокий элемент
                    </div>
                </div>
            </Flexbox>
        </Variant>
        <Variant title="full width">
            <Flexbox full-width>
                <div>Элемент 1</div>
                <div>
                    <a href="#">Username</a>
                </div>
                <div>
                    <div style="padding: 20px 5px; background: rgba(33,66,88,.2);">
                        Высокий элемент
                    </div>
                </div>
            </Flexbox>
        </Variant>
        <Variant title="fixed">
            <Flexbox fixed>
                <div>Элемент 1</div>
                <div>
                    <a href="#">Username</a>
                </div>
                <div>
                    <div style="padding: 20px 5px; background: rgba(33,66,88,.2);">
                        Высокий элемент
                    </div>
                </div>
            </Flexbox>
        </Variant>
        <Variant title="vertical">
            <Flexbox vertical>
                <div>Элемент 1</div>
                <div>
                    <a href="#">Username</a>
                </div>
                <div>
                    <div style="padding: 20px 5px; background: rgba(33,66,88,.2);">
                        Высокий элемент
                    </div>
                </div>
            </Flexbox>
        </Variant>
        <Variant title="vertical mobile">
            <Flexbox vertical-mobile>
                <div>Элемент 1</div>
                <div>
                    <a href="#">Username</a>
                </div>
                <div>
                    <div style="padding: 20px 5px; background: rgba(33,66,88,.2);">
                        Высокий элемент
                    </div>
                </div>
            </Flexbox>
        </Variant>
        <Variant title="wrap">
            <Flexbox wrap>
                <div>Элемент 1</div>
                <div>
                    <a href="#">Username</a>
                </div>
                <div>
                    <div style="padding: 20px 5px; background: rgba(33,66,88,.2);">
                        Высокий элемент
                    </div>
                </div>
            </Flexbox>
        </Variant>
        <Variant title="wrap mobile">
            <Flexbox wrap-mobile>
                <div>Элемент 1</div>
                <div>
                    <a href="#">Username</a>
                </div>
                <div>
                    <div style="padding: 20px 5px; background: rgba(33,66,88,.2);">
                        Высокий элемент
                    </div>
                </div>
            </Flexbox>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Flexbox } from '@/flexbox'
</script>
