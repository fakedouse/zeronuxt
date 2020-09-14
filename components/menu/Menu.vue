<template lang="pug">
    ul.menu
        li(v-for="item in items" :key="item.id")
            nuxt-link(v-if="item.href", :to="item.href", :exact="item.exact || false") {{item.value}}
            span(v-else) {{item.value}}


</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="sass">
ul.menu
    margin: 10px
    display: inline-block
    list-style: none
    padding: 2px
ul.menu li
    min-height: 50px
    min-width: 50px
ul.menu a
    font-family: 'Comfortaa', cursive;
    font-size: 18px
    display: block
    text-decoration: none
    color: inherit
    font-weight: 700
    width: 100%
    height: 100%
    padding-left: 5px
    padding-right: 5px
</style>
