<template lang="pug">
    footer.grid
        section.logo
            Logo(:logo="logo")
        section.socials
            Socials
        section.nav
            div#infoblock_map.yandex
                p Здесь будет карта
        section.contacts
            div#infoblock_contacts.animate
                p Контакты
            div
                nuxt-link(to='/about') About
</template>

<script>
import Socials from '~/components/Socials.vue'
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Socials,
    Logo
  },
  data() {
    return {
      logo: {
        src: 'avahero.jpg'
      }
    }
  }
}
</script>

<style lang="scss">
footer {
  grid-template-columns: 1fr 2fr 1fr;
  grid:
    [row1-start] 'logo nav contacts' [row1-end]
    [row2-start] 'socials socials contacts' [row2-end];
}
.logo {
  grid-area: logo;
}
.nav {
  grid-area: nav;
}
.contacts {
  grid-area: contacts;
}
.socials {
  grid-area: socials;
  padding: 0 30px;
}
</style>
