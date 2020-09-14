<template lang="pug">
.logo
  .logo-img 
    img(:src="logo.src")
  .logo-name(v-if="logo.name")
    h6 {{logo.name}}
  .logo-description(v-if="logo.desc") 
    span {{logo.desc}}
</template>

<script>
export default {
    props: {
        logo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.logo img {
    border-radius: 50%;
    height: 50px;
}
.logo {
    padding: 10px;
}
</style>
