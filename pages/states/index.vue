<template lang="pug">
    div.grid-backbone
        Header(:logo="logo")
        
        main.states
            section.intro
            section.content
                div.grid-posts
                    div.column.column-sitemap
                        div.tabcontent
                            Menu(:items="postTitleLinks")
                    div.column.column-posts
                        div.post(v-for="post in posts" :id="post.id" :key="post.id")
                            Post(:post="post")
                        
                    div.column-rblock
                        div#adb_id32794874.done
                            p И здесь например реклама всякая
                        div#adb_id33545566.done
                            p Продаются утюги. Дешевые! Китайские!
                            sup Срочно покупай горячий товар!
                        div#adb_id32344546.done
                            p Оставьте свои заботы в прошлом. С этим препаратом...
            section.conclusion
                p
                  | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit corrupti sed nobis voluptate
                  | officiis sapiente explicabo minima voluptas totam vitae. Quos perspiciatis magnam voluptatibus!
                  | Distinctio quo perferendis maxime incidunt tenetur numquam beatae ipsam quisquam minus ab nam dolor
                  | doloremque facere magnam error laudantium reprehenderit, soluta repellat molestiae. Magnam,
                  | explicabo officia?
                div Icons made by from 
                    a(href="https://www.flaticon.com/", title="Flaticon") www.flaticon.com
        Footer

</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Menu from '~/components/menu/Menu.vue'
import Post from '~/components/Post.vue'

const db = {
    posts: [
        {
            id: 'sfefs',
            title: 'Упредительный ядерный удар выпущен. Итоги',
            paragraph: 'Lorem ipsum dolor set amet...'
        },
        {
            id: 'fbcfbfs',
            title:
                'Что нас ждет при нападении рептилий. Реальность без прикрас',
            paragraph:
                'Lorem ipsum dolor set amet. Quos perspiciatis magnam voluptatibus! Distinctio quo perferendis maxime incidunt tenetur...'
        },
        {
            id: 'fnfgh',
            title: 'Катаклизмы связанные с активностью на Нибиру',
            paragraph:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corrupti sed nobis voluptate officiis sapiente explicabo minima voluptas totam vitae. Quos perspiciatis magnam voluptatibus! Distinctio quo perferendis maxime incidunt tenetur...ййц'
        },
        {
            id: 'fgdhmggj',
            title: 'Пророчество расшифровано. Сказано как победить рептилий',
            paragraph:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corrupti sed nobis voluptate officiis sapiente explicabo minima voluptas totam vitae. Quos perspiciatis magnam voluptatibus! Distinctio quo perferendis maxime incidunt tenetur...'
        },
        {
            id: 'hiulibk',
            title: 'На нибиру зафиксирована новая активность!',
            paragraph: 'Lorem ipsum dolor set amet...'
        }
    ]
}

export default {
    components: {
        Header,
        Footer,
        Menu,
        Post
    },
    data() {
        return {
            posts: db.posts,
            logo: {
                src: 'avahero.jpg',
                name: 'Ivan Peshkov',
                desc: 'The Author of this App'
            }
        }
    },
    computed: {
        postTitleLinks() {
            const posts = this.posts
            const arr = []
            for (const post of posts) {
                post.id = post.id + 'l'
                post.href = `#${post.id}`
                post.value = post.title
                arr.push(post)
            }
            return arr
        }
    }
}
</script>

<style lang="scss">
#adb_id32794874 {
    height: 200px;
    font-size: 20px;
}
</style>
