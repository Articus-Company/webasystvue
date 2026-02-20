<template>
    <Story title="Alert/Demo">
        <Variant title="default">
            <Alert>Alert</Alert>
        </Variant>
        <Variant title="alert close">
            <Alert>
                Alert close
                <AlertClose>
                    ✖
                </AlertClose>
            </Alert>
        </Variant>
        <Variant title="types">
            <Alert>
                Default
            </Alert>
            <Alert type="success">
                Success
            </Alert>
            <Alert type="danger">
                Danger
            </Alert>
            <Alert type="warning">
                Warning
            </Alert>
            <Alert type="info">
                Info
            </Alert>
            <Alert type="outlined">
                Outlined
            </Alert>
        </Variant>
        <Variant title="alert size">
            <Alert size="largest">
                Largest
            </Alert>
        </Variant>
        <Variant title="alert fixed box">
            <AlertFixedBox>
                <Alert>
                    Default
                </Alert>
                <Alert type="success">
                    ✔ Success
                </Alert>
                <Alert type="danger">
                    ☠︎︎ Danger
                </Alert>
                <Alert type="warning">
                    ⚠︎ Warning
                </Alert>
                <Alert type="info">
                    Info
                </Alert>
                <Alert type="outlined">
                    Outlined
                </Alert>
            </AlertFixedBox>
        </Variant>
        <Variant title="alert fixed box bottom large">
            <AlertFixedBox
                bottom
                large
            >
                <Alert>
                    Default
                </Alert>
                <Alert type="success">
                    ✔ Success
                </Alert>
                <Alert type="danger">
                    ☠︎︎ Danger
                </Alert>
                <Alert type="warning">
                    ⚠︎ Warning
                </Alert>
                <Alert type="info">
                    Info
                </Alert>
                <Alert type="outlined">
                    Outlined
                </Alert>
            </AlertFixedBox>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Alert, AlertClose, AlertFixedBox } from '@/alert'
</script>
