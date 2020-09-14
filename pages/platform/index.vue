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
            title: 'Платформа',
            subtitle: 'Сообщество',
            pages: [
                {
                    id: 'ddfbdb',
                    href: '/platform/crowdfunding',
                    name: 'Crowd'
                },
                {
                    id: 'fbbfbxb',
                    href: '/platform/chat',
                    name: 'Chat'
                },
                {
                    id: 'fbbfxbxhnsv',
                    href: '/platform/tools',
                    name: 'Tools'
                }
            ]
        }
    }
}
</script>

<style lang="sass"></style>
