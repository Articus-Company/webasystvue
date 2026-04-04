<template>
    <Flexbox
        style="border: 1px dashed gold"
        vertical
    >
        <span>
            Элемент 1
        </span>
        <div>
            <Userpic
                as="img"
                src="/wa-content/img/userpic20.jpg"
                alt="userpic"
                title="Элемент 2"
            />
        </div>
        <div>
            <Button>
                Элемент 3
            </Button>
        </div>
        <div style="padding: 20px 5px; background: rgba(33,66,88,.2);">
            Элемент 4
        </div>
    </Flexbox>
</template>

<script setup lang="ts">
import { Button, Flexbox, Userpic } from 'webasystvue'
</script>
