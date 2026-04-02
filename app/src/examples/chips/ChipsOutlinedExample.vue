<template>
    <p>
        <Chips outlined>
            <ChipsSection>
                <ChipsItem>
                    <ChipsItemCount>
                        <i class="fas fa-wifi"/>
                    </ChipsItemCount>
                    Wi-Fi
                </ChipsItem>
            </ChipsSection>
            <ChipsSection>
                <ChipsItem>
                    <ChipsItemCount>
                        <i class="fab fa-bluetooth-b"/>
                    </ChipsItemCount>
                    Bluetooth
                </ChipsItem>
            </ChipsSection>
            <ChipsSection>
                <ChipsItem>
                    NFC
                </ChipsItem>
            </ChipsSection>
        </Chips>
    </p>
    <p>
        <Chips>
            <ChipsSection outlined>
                <ChipsItem>
                    <ChipsItemCount>
                        <i class="fas fa-umbrella"/>
                    </ChipsItemCount>
                    Весна
                </ChipsItem>
            </ChipsSection>
            <ChipsSection outlined>
                <ChipsItem>
                    <ChipsItemCount>
                        <i class="fas fa-ice-cream"/>
                    </ChipsItemCount>
                    Лето
                </ChipsItem>
            </ChipsSection>
            <ChipsSection outlined>
                <ChipsItem>
                    <ChipsItemCount>
                        <i class="fas fa-tree"/>
                    </ChipsItemCount>
                    Осень
                </ChipsItem>
            </ChipsSection>
            <ChipsSection outlined>
                <ChipsItem>
                    <ChipsItemCount>
                        <i class="fas fa-snowflake"/>
                    </ChipsItemCount>
                    Зима
                </ChipsItem>
            </ChipsSection>
        </Chips>
    </p>
</template>

<script setup lang="ts">
import { Chips, ChipsItem, ChipsItemCount, ChipsSection } from 'webasystvue'
</script>
