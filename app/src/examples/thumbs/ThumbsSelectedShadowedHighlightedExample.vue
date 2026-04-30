<template>
    <Thumbs size="150">
        <ThumbsItem>
            <ThumbsItemImage selected>
                <img
                    src="https://demo1-ru.webasyst.com/wa-data/public/photos/13/01/113/113.150x150@2x.jpg"
                    alt=""
                >
            </ThumbsItemImage>
            <span>selected</span>
        </ThumbsItem>
        <ThumbsItem shadowed>
            <ThumbsItemImage>
                <img
                    src="https://demo1-ru.webasyst.com/wa-data/public/photos/19/01/119/119.150x150@2x.jpg"
                    alt=""
                >
            </ThumbsItemImage>
            <span>shadowed</span>
        </ThumbsItem>
        <ThumbsItem highlighted>
            <ThumbsItemImage>
                <img
                    src="https://demo1-ru.webasyst.com/wa-data/public/photos/18/01/118/118.150x150@2x.jpg"
                    alt=""
                >
            </ThumbsItemImage>
            <span>highlighted</span>
        </ThumbsItem>
    </Thumbs>
</template>

<script setup lang="ts">
import { Thumbs, ThumbsItem, ThumbsItemImage } from 'webasystvue'
</script>
