<template lang="pug">
  #app
    header.container
      span.navbar-brand.mb-0.h1 Task tracker
      ul.nav.nav-pills
        li.nav-item
          a.nav-link.active(href='#') Main page
        li.nav-item
          a.nav-link(href='#') Auth
        li.nav-item
          a.nav-link(href='#') About us

</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
header
  border-bottom 1px solid #b8b8b8
  padding 15px
  display flex
  justify-content space-between
  span
    text-transform uppercase
</style>
