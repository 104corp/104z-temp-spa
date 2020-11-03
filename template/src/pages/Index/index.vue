<script>
import StoreModule from './store'
export default {
  name: 'Index',
  <%_ if (options.plugins.find(el => el === 'vue-meta')) { _%>
  metaInfo () {
    return {
      title: 'title'
    }
  },
  <%_ } _%>
  beforeCreate () {
    this.$registerModule(this.$store, { index: StoreModule })
  },
  beforeDestroy () {
    this.$unregisterModule(this.$store, ['index'])
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss"></style>
