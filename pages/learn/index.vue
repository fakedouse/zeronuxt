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
            title: 'Учебник',
            subtitle: 'Здесь собрана теория',
            pages: [
                {
                    id: 'fsv',
                    href: '/books',
                    name: 'Книги'
                },
                {
                    id: 'fsczdcv',
                    href: '/Lectorys',
                    name: 'Лекции'
                },
                {
                    id: 'fsv',
                    href: '/spravochnik',
                    name: 'Справочники'
                }
            ]
        }
    }
}
</script>

<style lang="sass"></style>
