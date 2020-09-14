<template lang="pug">
    .grid-backbone
        Header(:logo="logo")
        main.states
                section.intro
                section.content
                    div.grid-posts
                        div.column.column-posts
                            div.post(v-for="post in posts" :id="post.id" :key="post.id")
                                Post(:post="post")

</template>

<script>
import Header from '~/components/Header.vue'
import Post from '~/components/Post.vue'
import LeftSidebar from '~/components/LeftSidebar.vue'

export default {
    components: {
        Header,
        LeftSidebar,
        Post
    },
    data() {
        return {
            logo: {
                src: '/avahero.jpg',
                name: 'Ivan Peshkov',
                desc: 'The Author of this App'
            },
            posts: [
                {
                    id: 'sfefs',
                    title: 'Упредительный ядерный удар выпущен. Итоги',
                    paragraph: 'Lorem ipsum dolor set amet...'
                }
            ]
        }
    }
}
</script>
