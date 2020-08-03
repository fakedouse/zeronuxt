<template lang="pug">
    header.flex
        section.ava
            Logo(:logo="logo")
        section.nav
            .header-nav
                nav
                    Menu(:items="headerItems")
                input(type="text" name="search")
        section.auth
            div.log.in
</template>

<script>
import Menu from '~/components/menu/Menu.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Menu,
    Logo
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    logo: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      headerItems: [
        {
          id: '1',
          href: '/',
          value: 'Home',
          exact: true
        },
        {
          id: '2',
          href: '/states',
          value: 'Статьи'
        },
        {
          id: '3',
          href: '/games',
          value: 'Игры'
        },
        {
          id: '4',
          href: '/learn',
          value: 'Учебник'
        },
        {
          id: '5',
          href: '/craft',
          value: 'Верстак'
        },
        {
          id: '6',
          href: '/platform',
          value: 'Платформа'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.header {
  align-content: stretch;
}

.header-nav * {
  display: inline-block;
}
</style>
