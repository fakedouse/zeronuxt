<template lang="pug">
  div.app
    section.back
        nuxt-link.button(to="/") GoBack!
    section.container.grid
        div.view.flex
            h1.title {{title}}
            h3.subtitle(v-if="subtitle") {{subtitle}}
        div.links.flex
            nuxt-link.button(
              v-for="page in pages",
              :key="page.id",
              :to="page.href"
              no-prefetch
              )
                | {{page.name}}
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  },
  computed: {
    random_color() {
      const colors = [
        'red',
        'blue',
        'green',
        'grey',
        'black',
        'darkgreen',
        'pink',
        'yellow',
        'magenta'
      ]
      const rand = colors.length
      const color = colors[Math.floor(Math.random() * rand)]

      return color
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  grid-template-columns: 3fr 2fr;
}

.view {
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-flow: column wrap;
}

.title {
  padding-left: 20px;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  text-transform: uppercase;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 32px;
  text-transform: uppercase;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  padding-left: 200px;
}

.links {
  padding-top: 15px;
  margin: 30px;
  justify-content: flex-start;
  align-items: baseline;
  text-align: center;
  flex-flow: column wrap;
}
</style>
