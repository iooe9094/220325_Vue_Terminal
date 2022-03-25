<template>
  <div id="app">
    <ourHeader></ourHeader>
    <ourBody></ourBody>
    <ourFooter></ourFooter>
  </div>
</template>

<script>

import ourHeader from "./components/ourHeader.vue"
import ourBody from "./components/ourBody.vue"
import ourFooter from "./components/ourFooter.vue"

export default {
  name: 'App',
  components: {
    ourHeader,
    ourBody,
    ourFooter
  }
}
</script>

<style>

</style>
