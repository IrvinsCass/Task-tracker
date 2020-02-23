<template lang="pug">
  #app
    header.container
      span.navbar-brand.mb-0.h1 Task tracker
      .icon-burger
        i.fas.fa-align-justify(
          @click="menuShow = !menuShow"
        )
        ul.nav.nav-pills.flex-column.navbar-hidden(
          v-if="menuShow"
        )
          li.nav-item(
            v-for="link in linkMenu"
            :key="link.title"
            @click="menuShow = !menuShow"
          )
            router-link.nav-link(
              :to="`${link.url}`"
            ) {{ link.title }}
      ul.nav.nav-pills.navbar
        li.nav-item(
          v-for="link in linkMenu"
          :key="link.title"
        )
          router-link.nav-link(
            :to="`${link.url}`"
          ) {{ link.title }}

    router-view
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menuShow: false,
      linkMenu: [
        {title: 'Home', url: '/'},
        {title: 'Login', url: '/login'},
        {title: 'Registration', url: '/registration'}
      ]
    }
  }
}
</script>

<style lang="stylus">
header
  border-bottom 1px solid #b8b8b8
  padding 15px
  display flex
  justify-content space-between
  align-items center
  min-width 320px
  position relative
  margin-bottom 20px
  span
    text-transform uppercase
  .navbar
    @media screen and (max-width: 480px)
      display none
  .navbar-hidden
    position absolute
    background-color #fff
    right 0
    padding 10px
    text-align right
    z-index 100
  .icon-burger
    display none
    font-size 22px
    margin-right 20px
    @media screen and (max-width: 480px)
      display block
</style>
