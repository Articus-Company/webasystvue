<style scoped>
.tip-icon{
    margin-right: .5em;
    margin-top: .25em;
}
</style>

<template>
    <Alert type="info">
        <Flexbox>
            <Icon class="tip-icon">
                <i class="fas fa-info-circle"/>
            </Icon>
            <div>
                <strong>
                    Примечание
                </strong>
                <div>
                    <slot/>
                </div>
            </div>
        </Flexbox>
    </Alert>
</template>

<script setup lang="ts">
import { Alert, Flexbox, Icon } from 'webasystvue'
</script>
