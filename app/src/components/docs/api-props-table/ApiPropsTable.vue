<template>
    <Table>
        <TableRow>
            <TableHead>Prop</TableHead>
            <TableHead>Default</TableHead>
            <TableHead max-width>
                Type
            </TableHead>
        </TableRow>
        <TableRow
            v-for="(row, index) in rows"
            :key="index"
        >
            <TableCell>
                <slot :name="`prop-${index}`">
                    <code class="bold">{{ row.prop }}</code>
                </slot>
            </TableCell>
            <TableCell>
                <slot :name="`default-${index}`">
                    <ApiPropsTableCodeAlt v-if="row.default">
                        {{ row.default }}
                    </ApiPropsTableCodeAlt>
                    <template v-else>
                        <i class="fas fa-minus"/>
                    </template>
                </slot>
            </TableCell>
            <TableCell max-width>
                <slot :name="`type-${index}`">
                    <ApiPropsTableCodeAlt>
                        {{ row.type }}
                    </ApiPropsTableCodeAlt>
                    <ApiPropsTableCodeDesc v-if="row.desc">
                        {{ row.desc }}
                    </ApiPropsTableCodeDesc>
                </slot>
            </TableCell>
        </TableRow>
    </Table>
</template>

<script setup lang="ts">
import { Table, TableCell, TableHead, TableRow } from 'webasystvue'
import ApiPropsTableCodeAlt from '@/components/docs/api-props-table/ApiPropsTableCodeAlt.vue'
import ApiPropsTableCodeDesc from '@/components/docs/api-props-table/ApiPropsTableCodeDesc.vue'

interface ApiPropsTableRow {
    prop?: string
    default?: string
    type?: string
    desc?: string
}

defineProps<{ rows: ApiPropsTableRow[] }>()
</script>
