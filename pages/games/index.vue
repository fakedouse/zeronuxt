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
            title: 'Games',
            subtitle: 'Играй, играй',
            pages: [
                {
                    id: 'sfee',
                    href: '/starpath',
                    name: 'StarPath'
                },
                {
                    id: 'fbcfvx',
                    href: '/battlepath',
                    name: 'BattlePath'
                },
                {
                    id: 'fsv',
                    href: '/trivial',
                    name: 'Trivial'
                }
            ]
        }
    }
}
</script>

<style lang="sass"></style>
