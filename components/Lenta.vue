<template lang="pug">
    .lenta.grid
        .header.flex
            .add
                button(:action="handler") 
            .search
                input(type="text")
            .filters
                .menu_filters
        .states.flex
            .post(v-for="post in previews", :id="post.id", :key="post.id")
                .tools
                    button.comment
                    button.remember
                    button.rewrite
                    button.hide
                .content(v-if="post.isreaded")
                    h2 {{post.title}}
                    p {{post.parag}}
        .similar
        .conclusion
        .comments
</template>

<style lang="scss">
.lenta {
    grid-gap: 10px;
    grid:
        [row1-start] 'header header header header' [row1-end]
        [row2-start] 'states states states similar' [row2-end]
        [row3-start] 'conclusion conclusion conclusion similar' [row3-end]
        [row4-start] 'comments comments comments similar' [row4-end];
}

.header {
    grid-area: header;
}

.states {
    grid-area: states;
}

.similar {
    grid-area: similar;
}

.conclusion {
    grid-area: conclusion;
}

.comments {
    grid-area: comments;
}
</style>

<script>
export default {
    props: {
        previews: {
            type: Array,
            required: true
        }
    }
}
</script>
