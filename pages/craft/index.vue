<template lang="pug">
    Preview(:pages="pages", :title="title", :subtitle="subtitle")
</template>

<script>
import Preview from '~/components/Preview.vue'

export default {
    components: {
        Preview
    },
    data() {
        return {
            title: 'Верстак',
            subtitle: 'Делу время',
            pages: [
                {
                    id: 'dtbdb',
                    href: '/craft/office',
                    name: 'Office'
                },
                {
                    id: 'fbbfbxb',
                    href: '/craft/cad',
                    name: 'CAD'
                },
                {
                    id: 'fbbfxbxhnsv',
                    href: '/craft/mindmap',
                    name: 'MindMap'
                },
                {
                    id: 'srbsb',
                    href: '/craft/calculators',
                    name: 'Calculators'
                },
                {
                    id: 'vrzgxvr',
                    href: '/craft/redactor',
                    name: 'TextRedactor'
                }
            ]
        }
    }
}
</script>

<style lang="sass"></style>
