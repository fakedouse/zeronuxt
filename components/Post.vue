<template lang="pug">
    .state(:class="post.category")
        .title_container
            h3 {{post.title}}
        .parag_container 
            p {{post.paragraph}}
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="sass">
.state
    box-sizing: border-box
    background: #fa9
    padding: 10px
    margin: 10px
    border-radius: 10px
.title_container
    padding: 10px 0
    margin: 0
    width: 100%
    & h3
        font-size: 26px
        font-family: 'Comfortaa', cursive
.parag_container
    width: 100%
    padding: 5px 10px
    font-family: 'Alegreya Sans', sans-serif
</style>
