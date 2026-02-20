<template>
    <Story title="Banner/Demo">
        <Variant title="default">
            <Banner>
                Banner
            </Banner>
        </Variant>
        <Variant title="static">
            <Banner static>
                Banner static
            </Banner>
        </Variant>
        <Variant title="banner close">
            <Banner>
                Banner close
                <BannerClose>
                    ✖
                </BannerClose>
            </Banner>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Banner, BannerClose } from '@/banner'
</script>
