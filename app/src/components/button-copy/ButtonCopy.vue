<style scoped>
.icon-enter-active,
.icon-leave-active {
    transition: opacity 0.15s ease;
}

.icon-enter-from,
.icon-leave-to {
    opacity: 0;
}
</style>

<template>
    <Button
        circle
        nobutton
        title="Копировать"
        @click="copy"
    >
        <Transition
            name="icon"
            mode="out-in"
        >
            <span
                v-if="!copied"
                key="clipboard"
            >
                <i class="far fa-clipboard"/>
            </span>
            <span
                v-else
                key="check"
            >
                <i class="fas fa-check"/>
            </span>
        </Transition>
    </Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'webasystvue'

const props = defineProps<{
    text: string
}>()

const copied = ref(false)

async function copy() {
    try {
        await navigator.clipboard.writeText(props.text)
    } catch {
        const el = document.createElement('textarea')
        el.value = props.text
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
    }

    copied.value = true
    setTimeout(() => {
        copied.value = false
    }, 2000)
}
</script>
