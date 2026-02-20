<template>
    <Story title="List/Demo">
        <Variant title="example 1">
            <List>
                <ListItem>
                    <ListItemImage as="a">
                        <i
                            class="userpic userpic32"
                            style="background-image: url('https://demo1-ru.webasyst.com/wa-data/public/hub/categories/3/ipng.png')"
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
                            style="background-image: url('https://demo1-ru.webasyst.com/wa-data/public/hub/categories/3/ipng.png')"
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
                            style="background-image: url('https://demo1-ru.webasyst.com/wa-data/public/hub/categories/3/ipng.png')"
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
                            style="background-image: url('https://demo1-ru.webasyst.com/wa-data/public/hub/categories/3/ipng.png')"
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
                            style="background-image: url('https://demo1-ru.webasyst.com/wa-data/public/hub/categories/3/ipng.png')"
                        />
                    </ListItemImage>
                    <ListItemDetails as="a">
                        Order #100496
                    </ListItemDetails>
                </ListItem>
            </List>
        </Variant>
        <Variant title="example 2">
            <List as="ul">
                <ListItem as="li">
                    <ListItemImage>
                        <i
                            class="userpic userpic48"
                            style="background-image: url('https://demo1-ru.webasyst.com/wa-data/public/hub/categories/3/ipng.png')"
                        />
                    </ListItemImage>
                    <ListItemDetails>
                        <div class="tablebox">
                            <strong>Order #100500</strong>
                            <span class="count align-right">5</span>
                        </div>
                        <p class="hint">
                            Lorem ipsum
                        </p>
                    </ListItemDetails>
                </ListItem>
                <ListItem as="li">
                    <ListItemImage>
                        <i
                            class="userpic userpic48"
                            style="background-image: url('https://demo1-ru.webasyst.com/wa-data/public/hub/categories/3/ipng.png')"
                        />
                    </ListItemImage>
                    <ListItemDetails>
                        <div class="tablebox">
                            <strong>Order #100499</strong>
                            <span class="count align-right">
                                <span class="badge green">
                                    2
                                </span>
                                23
                            </span>
                        </div>
                        <p class="hint">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </ListItemDetails>
                </ListItem>
                <ListItem as="li">
                    <ListItemImage>
                        <i
                            class="userpic userpic48"
                            style="background-image: url('https://demo1-ru.webasyst.com/wa-data/public/hub/categories/3/ipng.png')"
                        />
                    </ListItemImage>
                    <ListItemDetails>
                        <div class="tablebox">
                            <strong>Order #100498</strong>
                        </div>
                    </ListItemDetails>
                </ListItem>
                <ListItem
                    as="li"
                    selected
                >
                    <ListItemImage>
                        <i
                            class="userpic userpic48"
                            style="background-image: url('https://demo1-ru.webasyst.com/wa-data/public/hub/categories/3/ipng.png')"
                        />
                    </ListItemImage>
                    <ListItemDetails>
                        <div class="tablebox">
                            <strong>Order #100497</strong>
                            <span class="count align-right"><span class="badge red">1</span></span>
                        </div>
                        <p class="hint">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </ListItemDetails>
                </ListItem>
                <ListItem as="li">
                    <ListItemImage>
                        <i
                            class="userpic userpic48"
                            style="background-image: url('https://demo1-ru.webasyst.com/wa-data/public/hub/categories/3/ipng.png')"
                        />
                    </ListItemImage>
                    <ListItemDetails>
                        <div class="tablebox">
                            <strong>Order #100497</strong>
                        </div>
                        <p class="hint">
                            Lorem ipsum
                        </p>
                    </ListItemDetails>
                </ListItem>
            </List>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { List, ListItem, ListItemDetails, ListItemImage } from '@/list'
</script>
