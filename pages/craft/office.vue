<template lang="pug">
    Preview(:title="title", :pages="pages", :subtitle="subtitle")
</template>

<script>
import Preview from '~/components/Preview.vue'

export default {
  components: {
    Preview
  },
  data() {
    return {
      title: 'LibreOffice',
      subtitle: 'opensource office tools',
      pages: [
        {
          id: 'fcvvb',
          href: '/craft/office/writer',
          name: 'Writer'
        },
        {
          id: 'vdrbn',
          href: '/craft/office/calc',
          name: 'Calc'
        },
        {
          id: 'crvzdsd',
          href: '/craft/office/math',
          name: 'Math'
        },
        {
          id: 'iml',
          href: '/craft/office/impress',
          name: 'Impress'
        },
        {
          id: 'fzdvsv',
          href: '/craft/office/draw',
          name: 'Draw'
        },
        {
          id: 'zvdvzv',
          href: '/craft/office/base',
          name: 'Base'
        }
      ]
    }
  }
}
</script>

<style></style>
