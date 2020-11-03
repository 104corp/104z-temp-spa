<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  mounted () {
    window.addEventListener('resize', this.resizeHandler)
    window.addEventListener('scroll', this.scrollHandler)
    this.resizeHandler()
    this.scrollHandler()
    this.deviceHandler()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler)
    window.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    resizeHandler () {
      this.SET_SIZE({
        width: window.innerWidth,
        height: window.innerHeight
      })
      this.SET_SIZE({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        type: 'client'
      })
    },
    scrollHandler () {
      this.SET_SCROLL({
        top: document.body.scrollTop || document.documentElement.scrollTop,
        left: document.body.scrollLeft || document.documentElement.scrollLeft
      })
    },
    deviceHandler () {
      const ua = navigator.userAgent
      this.SET_DEVICE((/Android/i.test(ua) || /iPhone|iPad/i.test(ua)))
    },
    ...mapMutations({
      SET_DEVICE: 'userAgent/SET_DEVICE',
      SET_SIZE: 'userAgent/SET_SIZE',
      SET_SCROLL: 'userAgent/SET_SCROLL'
    })
  }
}

</script>

<style lang="scss">
  @import '~@/assets/style/main';
</style>
