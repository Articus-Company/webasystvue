<template>
    <Story title="Button/Demo">
        <Variant title="default">
            <Button>Button</Button>
        </Variant>
        <Variant title="colored">
            <Button color="warning">
                Warning
            </Button>
            <Button color="danger">
                Danger
            </Button>
            <Button color="success">
                Success
            </Button>
            <Button color="black">
                Black
            </Button>
            <Button color="blue">
                Blue
            </Button>
            <Button color="brown">
                Brown
            </Button>
            <Button color="dark-gray">
                Dark-gray
            </Button>
            <Button color="gray">
                Gray
            </Button>
            <Button color="green">
                Green
            </Button>
            <Button color="orange">
                Orange
            </Button>
            <Button color="pink">
                Pink
            </Button>
            <Button color="purple">
                Purple
            </Button>
            <Button color="red">
                Red
            </Button>
            <Button color="white">
                White
            </Button>
            <Button color="yellow">
                Yellow
            </Button>
            <Button color="light-gray">
                Light-gray
            </Button>
        </Variant>
        <Variant title="outlined">
            <Button outlined>
                Button outlined
            </Button>
        </Variant>
        <Variant title="rounded">
            <Button rounded>
                Button rounded
            </Button>
        </Variant>
        <Variant title="nobutton">
            <Button nobutton>
                Button nobutton
            </Button>
        </Variant>
        <Variant title="full width">
            <Button full-width>
                Button full width
            </Button>
        </Variant>
        <Variant title="gradient">
            <Button gradient>
                Button gradient
            </Button>
        </Variant>
        <Variant title="sized">
            <Button size="smallest">
                smallest
            </Button>
            <Button size="smaller">
                smaller
            </Button>
            <Button size="small">
                small
            </Button>
            <Button size="large">
                large
            </Button>
            <Button size="larger">
                larger
            </Button>
            <Button size="largest">
                largest
            </Button>
        </Variant>
        <Variant title="circle">
            <Button circle>
                😊
            </Button>
        </Variant>
        <Variant title="disabled">
            <Button disabled>
                Button disabled
            </Button>
        </Variant>
        <Variant title="tag a">
            <Button as="a">
                tag a
            </Button>
            <Button
                as="a"
                disabled
            >
                a disabled
            </Button>
            <Button
                as="a"
                color="orange"
                gradient
            >
                a colored gradient
            </Button>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Button } from '@/button'
</script>
