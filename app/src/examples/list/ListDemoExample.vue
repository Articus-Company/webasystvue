<template>
    <List style="width: 300px">
        <ListItem>
            <ListItemImage as="a">
                <i
                    class="userpic userpic32"
                    style="background-image: url('/wa-content/img/userpic.svg')"
                />
            </ListItemImage>
            <ListItemDetails as="a">
                Order #100500
            </ListItemDetails>
        </ListItem>
        <ListItem>
            <ListItemImage as="a">
                <i
                    class="userpic userpic32"
                    style="background-image: url('/wa-content/img/userpic.svg')"
                />
            </ListItemImage>
            <ListItemDetails as="a">
                Order #100499
            </ListItemDetails>
        </ListItem>
        <ListItem>
            <ListItemImage as="a">
                <i
                    class="userpic userpic32"
                    style="background-image: url('/wa-content/img/userpic.svg')"
                />
            </ListItemImage>
            <ListItemDetails as="a">
                Order #100498
            </ListItemDetails>
        </ListItem>
        <ListItem selected>
            <ListItemImage as="a">
                <i
                    class="userpic userpic32"
                    style="background-image: url('/wa-content/img/userpic.svg')"
                />
            </ListItemImage>
            <ListItemDetails as="a">
                Order #100497
            </ListItemDetails>
        </ListItem>
        <ListItem>
            <ListItemImage as="a">
                <i
                    class="userpic userpic32"
                    style="background-image: url('/wa-content/img/userpic.svg')"
                />
            </ListItemImage>
            <ListItemDetails as="a">
                Order #100496
            </ListItemDetails>
        </ListItem>
    </List>
</template>

<script setup lang="ts">
import { List, ListItem, ListItemDetails, ListItemImage } from 'webasystvue'
</script>
